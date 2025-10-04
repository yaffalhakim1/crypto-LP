import React, { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  format = 'webp',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !priority) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || img.src;
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    if (priority) {
      // Load immediately for priority images
      imgRef.current.src = src;
    } else {
      // Set data-src for lazy loading
      if (imgRef.current) {
        imgRef.current.dataset.src = src;
        observer.observe(imgRef.current);
      }
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, priority]);

  const handleError = () => {
    setError(true);
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  // Generate optimized srcset
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [384, 640, 768, 1024, 1280, 1536];
    return sizes
      .map((size) => `${baseSrc}?w=${size}&q=${quality}&f=${format} ${size}w`)
      .join(', ');
  };

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
      >
        <span className='text-gray-500'>Failed to load image</span>
      </div>
    );
  }

  return (
    <picture>
      {format === 'webp' && (
        <>
          <source
            type='image/webp'
            srcSet={generateSrcSet(src)}
            sizes={sizes}
          />
          <source
            type='image/jpeg'
            srcSet={generateSrcSet(src.replace('.webp', '.jpg'))}
            sizes={sizes}
          />
        </>
      )}
      <img
        ref={imgRef}
        src={priority ? src : undefined}
        srcSet={priority ? generateSrcSet(src) : undefined}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding='async'
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        style={{
          objectFit: 'cover',
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : 'auto',
        }}
      />
    </picture>
  );
};

export default OptimizedImage;
