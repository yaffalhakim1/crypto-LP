import React, { useState, useRef, useEffect } from 'react';

interface BetterImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  loading?: 'eager' | 'lazy';
  onLoad?: () => void;
  onError?: () => void;
}

const BetterImage: React.FC<BetterImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 80,
  loading = 'lazy',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(loading === 'eager');
  const [error, setError] = useState(false);
  const [isInView, setIsInView] = useState(priority || loading === 'eager');
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized URL with quality parameter
  const getOptimizedSrc = (baseSrc: string, qual: number) => {
    if (baseSrc.includes('?')) {
      return `${baseSrc}&q=${qual}`;
    }
    return `${baseSrc}?q=${qual}`;
  };

  // Generate responsive srcSet
  const generateSrcSet = (baseSrc: string) => {
    const sizes = [384, 640, 768, 1024, 1280, 1536];
    return sizes
      .map(size => `${getOptimizedSrc(baseSrc, quality)}&w=${size} ${size}w`)
      .join(', ');
  };

  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [priority, loading]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    onError?.();
  };

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-200 ${className}`}
        style={{
          width: width ? `${width}px` : '100%',
          height: height ? `${height}px` : '200px',
        }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width: width ? `${width}px` : '100%' }}>
      {/* Loading placeholder (skip for eager loading) */}
      {!isLoaded && loading !== 'eager' && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse"
          style={{ height: height ? `${height}px` : 'auto' }}
        />
      )}

      <img
        ref={imgRef}
        src={isInView ? getOptimizedSrc(src, quality) : undefined}
        srcSet={isInView && !priority && loading !== 'eager' ? generateSrcSet(src) : undefined}
        sizes={isInView && !priority && loading !== 'eager' ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority || loading === 'eager' ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`${
          loading === 'eager' ? 'opacity-100' : `transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`
        } w-full h-full object-cover`}
        style={{
          height: height ? `${height}px` : 'auto',
        }}
      />
    </div>
  );
};

export default BetterImage;