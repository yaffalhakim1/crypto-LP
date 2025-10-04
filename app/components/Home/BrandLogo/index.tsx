import React from 'react';
import { brandList } from './data';
import BetterImage from '../../Common/BetterImage';

function BrandLogo() {
  // Triple the array for better mobile coverage
  const duplicatedBrandList = [...brandList, ...brandList, ...brandList];

  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='gap-4'>
            <div className='relative flex justify-center py-4 text-center'>
              <p className='font-medium text-white'>
                Trusted by top{' '}
                <span className='font-semibold text-primary'>
                  Financial Institutions
                </span>
              </p>
            </div>

            <div className='py-3 overflow-hidden Xsm:py-7'>
              {/* CSS-only infinite slider */}
              <div className='flex w-max animate-scroll-slider'>
                {duplicatedBrandList.map((item, index) => (
                  <div key={index} className='flex-shrink-0 px-5'>
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

export default BrandLogo;
