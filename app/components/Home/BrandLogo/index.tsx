import React, { useState } from 'react';
import { brandList } from './data';
import BetterImage from '../../Common/BetterImage';

function BrandLogo() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section>
      <div className='2xl:py-20 py-11'>
        <div className='container'>
          <div className='gap-4'>
            <div className='flex justify-center text-center py-4 relative'>
              <p className='text-white font-medium'>
                Trusted by top{' '}
                <span className='text-primary'>financial institutions</span>
              </p>
            </div>

            <div className='py-3 Xsm:py-7 overflow-hidden'>
              <div
                className='flex space-x-10'
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                {/* First set of logos */}
                <div className={`flex space-x-10 ${isPaused ? '' : 'animate-slide'}`}>
                  {brandList.map((item, index) => (
                    <div
                      key={index}
                      className='flex-shrink-0 w-[135px] h-[35px] flex items-center'
                    >
                      <BetterImage
                        src={item.image}
                        alt={item.title}
                        width={135}
                        height={35}
                        className='w-full h-full object-contain'
                        quality={85}
                      />
                    </div>
                  ))}
                </div>

                {/* Duplicate set for seamless loop */}
                <div className={`flex space-x-10 ${isPaused ? '' : 'animate-slide'}`}>
                  {brandList.map((item, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className='flex-shrink-0 w-[135px] h-[35px] flex items-center'
                    >
                      <BetterImage
                        src={item.image}
                        alt={item.title}
                        width={135}
                        height={35}
                        className='w-full h-full object-contain'
                        quality={85}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default BrandLogo;
