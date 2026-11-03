export const DEFAULT_FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85';

/**
 * Shared <img> onError fallback: handles multi-stage recovery.
 * 1. Tries the project's secondary fallback URL if distinct.
 * 2. If the fallback also fails, is identical, or is missing,
 *    swaps to the curated luxury architectural placeholder so
 *    images never render broken.
 * 3. Stops loops via dataset tracking and resetting onerror.
 */
export function handleImageError(event, fallbackUrl) {
  const img = event?.target;
  if (!img) return;

  // Already on the ultimate fallback — stop to prevent any infinite loops
  if (img.src === DEFAULT_FALLBACK_IMAGE || img.dataset.fallbackApplied === 'final') {
    img.onerror = null;
    return;
  }

  // Stage 1: Try distinct fallback URL if available
  if (fallbackUrl && img.src !== fallbackUrl && !img.dataset.fallbackApplied) {
    img.dataset.fallbackApplied = 'secondary';
    img.src = fallbackUrl;
    return;
  }

  // Stage 2: Swap to guaranteed luxury architectural photo
  img.dataset.fallbackApplied = 'final';
  img.onerror = null;
  img.src = DEFAULT_FALLBACK_IMAGE;
}
