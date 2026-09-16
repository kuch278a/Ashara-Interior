/**
 * Client-Side Image Optimizer for Ashara Interiors CMS
 * Automatically downscales and compresses high-resolution photographs
 * to ensure lightning-fast uploads without visual degradation.
 */

export async function compressImage(file, options = {}) {
  const {
    maxWidth = 1920,
    maxHeight = 1280,
    quality = 0.82,
    maxSizeBytes = 400 * 1024 // 400KB target
  } = options;

  if (!file || !file.type || !file.type.startsWith('image/')) {
    return { file, dataUrl: null, wasCompressed: false };
  }

  // Preserve SVG or animated GIF
  if (file.type === 'image/svg+xml' || file.type === 'image/gif') {
    const dataUrl = await readFileAsDataURL(file);
    return { file, dataUrl, wasCompressed: false };
  }

  return new Promise((resolve) => {
    const objectUrl = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      try {
        let width = img.naturalWidth || img.width;
        let height = img.naturalHeight || img.height;

        // Calculate aspect-ratio preserved dimensions
        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);

        // Determine best quality based on original size
        let targetQuality = quality;
        if (file.size > 5 * 1024 * 1024) {
          targetQuality = 0.78; // Aggressive compression for 5MB+ DSLR/phone photos
        }

        const dataUrl = canvas.toDataURL('image/jpeg', targetQuality);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              readFileAsDataURL(file).then((fallbackUrl) => {
                resolve({ file, dataUrl: fallbackUrl, wasCompressed: false });
              });
              return;
            }

            const cleanBase = (file.name || 'image').replace(/\.[^/.]+$/, '');
            const compressedFile = new File([blob], `${cleanBase}.jpg`, {
              type: 'image/jpeg',
              lastModified: Date.now()
            });

            console.log(
              `[ImageOptimizer] Optimized "${file.name}": ${(file.size / 1024).toFixed(0)} KB -> ${(compressedFile.size / 1024).toFixed(0)} KB (${Math.round((1 - compressedFile.size / file.size) * 100)}% reduction)`
            );

            resolve({
              file: compressedFile,
              dataUrl,
              wasCompressed: true,
              originalSize: file.size,
              compressedSize: compressedFile.size
            });
          },
          'image/jpeg',
          targetQuality
        );
      } catch (err) {
        console.warn('[ImageOptimizer] Canvas processing failed, falling back to original file:', err);
        readFileAsDataURL(file).then((dataUrl) => {
          resolve({ file, dataUrl, wasCompressed: false });
        });
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      console.warn('[ImageOptimizer] Image load error, using original file');
      readFileAsDataURL(file).then((dataUrl) => {
        resolve({ file, dataUrl, wasCompressed: false });
      });
    };

    img.src = objectUrl;
  });
}

function readFileAsDataURL(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}
