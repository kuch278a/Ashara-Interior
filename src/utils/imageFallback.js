/**
 * Shared <img> onError fallback: stops error loops, then swaps to the
 * fallback URL only when one exists and differs from the failed source
 * (CMS items may lack fallbackImage, and re-assigning the same URL would
 * just fail again).
 */
export function handleImageError(event, fallbackUrl) {
  const img = event.target;
  img.onerror = null;
  if (fallbackUrl && img.src !== fallbackUrl) {
    img.src = fallbackUrl;
  }
}
