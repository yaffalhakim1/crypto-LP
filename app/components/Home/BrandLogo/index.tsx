import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { brandList } from './data';
import BetterImage from '../../Common/BetterImage';

function BrandLogo() {
  const [Slider, setSlider] = useState<any>(null);

  useEffect(() => {
    // Import slider only on client side
    import('react-slick').then((module) => {
      setSlider(() => module.default);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
  };

  // Don't render until slider is loaded on client
  if (!Slider) {
    return (
      <section>
        <div className='2xl:py-20 py-11'>
          <div className='container'>
            <div className='gap-4'>
              <div className='relative flex justify-center py-4 text-center'>
                <p className='font-medium text-white'>
                  Trusted by top{' '}
                  <span className='text-primary'>financial institutions</span>
                </p>
              </div>
              <div className='py-3 Xsm:py-7'>
                {/* Loading placeholder or simple grid */}
                <div className='flex gap-5 overflow-hidden'>
                  {brandList.slice(0, 4).map((item, index) => (
                    <div key={index} className='px-5'>
                      <div className='w-[135px] h-[35px] flex items-center justify-center'>
                        <BetterImage
                          src={item.image}
                          alt={item.title}
                          className='object-contain w-full h-full'
                          quality={85}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='gap-4'>
            <div className='relative flex justify-center py-4 text-center'>
              <p className='font-medium text-white'>
                Trusted by top{' '}
                <span className='text-primary'>financial institutions</span>
              </p>
            </div>

            <div className='py-3 Xsm:py-7'>
              <Slider {...settings}>
                {brandList.map((item, index) => (
                  <div key={index} className='px-5'>
                    <div className='w-[135px] h-[35px] flex items-center justify-center'>
                      <BetterImage
                        src={item.image}
                        alt={item.title}
                        className='object-contain w-full h-full'
                        quality={85}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandLogo;
