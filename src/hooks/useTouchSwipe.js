import { useState } from 'react';

// Shared touch-swipe handling for the hero slideshow and testimonial carousel.
// A horizontal-dominant swipe past SWIPE_THRESHOLD px fires onSwipe(+1) (left
// swipe → next) or onSwipe(-1) (right swipe → previous); vertical-dominant
// drags are ignored so page scrolling wins. With { followDrag: true } the
// horizontal drag offset is exposed so the carousel can follow the finger.
const SWIPE_THRESHOLD = 50;

export default function useTouchSwipe(onSwipe, { followDrag = false } = {}) {
  const [touchStart, setTouchStart] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleTouchStart = (e) => {
    setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (touchStart === null) return;
    const deltaX = e.touches[0].clientX - touchStart.x;
    const deltaY = e.touches[0].clientY - touchStart.y;
    // Follow the finger only on horizontal-dominant drags; let vertical page scroll win otherwise
    setDragOffset(Math.abs(deltaX) > Math.abs(deltaY) ? deltaX : 0);
  };

  const handleTouchEnd = (e) => {
    if (touchStart !== null) {
      const deltaX = followDrag
        ? dragOffset
        : Math.abs(e.changedTouches[0].clientX - touchStart.x) > Math.abs(e.changedTouches[0].clientY - touchStart.y)
          ? e.changedTouches[0].clientX - touchStart.x
          : 0;
      if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
        onSwipe(deltaX < 0 ? 1 : -1);
      }
    }
    setTouchStart(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  const handleTouchCancel = () => {
    setTouchStart(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  const handlers = {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
    onTouchCancel: handleTouchCancel
  };
  if (followDrag) {
    handlers.onTouchMove = handleTouchMove;
  }

  return { dragOffset, isDragging, handlers };
}
