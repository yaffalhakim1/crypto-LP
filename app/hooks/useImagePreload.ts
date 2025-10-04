import { useEffect, useState } from 'react';

interface UseImagePreloadOptions {
  src: string;
  priority?: boolean;
  quality?: number;
}

export const useImagePreload = ({ src, priority = false, quality = 80 }: UseImagePreloadOptions) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();

    // Add quality param if it's an external image
    const optimizedSrc = src.includes('?')
      ? `${src}&q=${quality}`
      : `${src}?q=${quality}`;

    img.onload = () => {
      setIsLoaded(true);
      setError(null);
    };

    img.onerror = () => {
      setError('Failed to load image');
    };

    if (priority) {
      // Preload immediately for priority images
      img.src = optimizedSrc;
    } else {
      // Use requestIdleCallback for non-critical images
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          img.src = optimizedSrc;
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          img.src = optimizedSrc;
        }, 100);
      }
    }

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, priority, quality]);

  return { isLoaded, error };
};

// Preload multiple images
export const useImagePreloadArray = (srcs: string[], priority = false) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    if (!srcs.length) return;

    let completed = 0;
    const newErrors: string[] = [];

    const preloadImage = (src: string) => {
      const img = new Image();

      img.onload = () => {
        completed++;
        setLoadedCount(completed);

        if (completed === srcs.length) {
          // All images loaded
        }
      };

      img.onerror = () => {
        newErrors.push(`Failed to load: ${src}`);
        setErrors([...newErrors]);
        completed++;
        setLoadedCount(completed);
      };

      if (priority) {
        img.src = src;
      } else {
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            img.src = src;
          });
        } else {
          setTimeout(() => {
            img.src = src;
          }, Math.random() * 1000); // Stagger loads
        }
      }
    };

    srcs.forEach(preloadImage);
  }, [srcs, priority]);

  const allLoaded = loadedCount === srcs.length;
  const hasErrors = errors.length > 0;

  return {
    loadedCount,
    totalCount: srcs.length,
    allLoaded,
    hasErrors,
    errors,
    progress: srcs.length > 0 ? (loadedCount / srcs.length) * 100 : 0
  };
};