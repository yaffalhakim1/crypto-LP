import React from 'react';
import BetterImage from './BetterImage';

// Simple usage examples

// Hero image - priority loading
export const HeroImage: React.FC = () => (
  <BetterImage
    src="/images/hero-banner.jpg"
    alt="Crypgo trading platform hero banner"
    width={1920}
    height={600}
    className="w-full rounded-lg"
    priority={true}
    quality={85}
    loading="eager"
  />
);

// Gallery images - lazy loaded
export const GalleryImages: React.FC = () => {
  const images = [
    '/images/crypto-1.jpg',
    '/images/crypto-2.jpg',
    '/images/crypto-3.jpg',
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {images.map((src, index) => (
        <BetterImage
          key={index}
          src={src}
          alt={`Cryptocurrency ${index + 1}`}
          width={400}
          height={300}
          className="rounded-lg"
          priority={false}
          quality={75}
        />
      ))}
    </div>
  );
};

// Card image with hover effect
export const CardImage: React.FC = () => (
  <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <BetterImage
      src="/images/trading-interface.jpg"
      alt="Trading interface screenshot"
      width={800}
      height={450}
      className="transform transition-transform duration-300 group-hover:scale-105"
      quality={80}
    />
  </div>
);

// Logo/Icon - small and sharp
export const LogoImage: React.FC = () => (
  <BetterImage
    src="/images/logo.png"
    alt="Company logo"
    width={200}
    height={60}
    className="h-auto"
    priority={true}
    quality={95}
    loading="eager"
  />
);

// Responsive image without fixed dimensions
export const ResponsiveImage: React.FC = () => (
  <BetterImage
    src="/images/banner.jpg"
    alt="Responsive banner"
    className="w-full h-auto"
    quality={75}
  />
);

// Component showcase
const ImageUsageGuide: React.FC = () => {
  return (
    <div className="space-y-8 p-6">
      <section>
        <h2 className="text-2xl font-bold mb-4">Hero Image (Priority)</h2>
        <HeroImage />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Gallery Images (Lazy)</h2>
        <GalleryImages />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Card Image</h2>
        <CardImage />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Logo</h2>
        <LogoImage />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Responsive Image</h2>
        <ResponsiveImage />
      </section>
    </div>
  );
};

export default ImageUsageGuide;