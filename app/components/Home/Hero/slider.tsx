import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pricedeta } from '../../../data';
import { useEffect, useState } from 'react';

interface CardSliderProps {
  priceMap: Record<string, { usd: number; usd_24h_change: number } | null>;
  loading: boolean;
  error: string | null;
  onRetry: () => void;
}

const CardSlider = ({ priceMap, loading, error, onRetry }: CardSliderProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className='pt-14 flex flex-col gap-10'>
      <div className='flex flex-col gap-3 items-center justify-center text-center'>
        <p className='text-white font-medium'>
          Featured <span className='text-primary'>crypto coins</span>
        </p>
        <h2 className='sm:text-40 text-30 text-white font-medium'>
          Top crypto coins updates
        </h2>
      </div>

      {error && (
        <div className='text-center py-8'>
          <p className='text-red-400 mb-4'>{error}</p>
          <button
            onClick={onRetry}
            className='bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg transition-colors'
          >
            Retry
          </button>
        </div>
      )}

      {isClient ? (
        <Slider {...settings}>
          {pricedeta.map((item, index) => {
            const coinData = priceMap[item.title.toLowerCase()];
            const price = coinData?.usd;
            const change = coinData?.usd_24h_change;

            return (
              <div key={index} className='pr-6'>
                <div className='px-5 py-6 bg-dark_grey/80 rounded-xl transition-all duration-300 hover:bg-dark_grey/90'>
                  <div className='flex flex-col items-center gap-5'>
                    <div
                      className={`${item.background} ${item.padding} rounded-full`}
                    >
                      <img
                        src={item.icon}
                        alt={`${item.title} icon`}
                        width={item.width}
                        height={item.height}
                      />
                    </div>
                    <p className='text-white text-xs font-normal'>
                      <span className='text-16 font-bold mr-2'>
                        {item.title}
                      </span>
                      {item.short}
                    </p>
                  </div>
                  <div className='flex justify-center mt-2'>
                    <div className='text-center'>
                      {loading && !price ? (
                        <div className='animate-pulse'>
                          <div className='h-6 w-20 bg-gray-600 rounded mb-2'></div>
                          <div className='h-4 w-16 bg-gray-600 rounded'></div>
                        </div>
                      ) : price ? (
                        <>
                          <p className='text-xl font-bold text-white mb-0 leading-none transition-all duration-300'>
                            ${price.toFixed(2)}
                          </p>
                          <p
                            className={`text-sm mt-1 transition-all duration-300 ${
                              change
                                ? change > 0
                                  ? 'text-green-400'
                                  : change < 0
                                    ? 'text-red-400'
                                    : 'text-muted'
                                : 'text-muted'
                            }`}
                          >
                            {change
                              ? `${change > 0 ? '+' : ''}${change.toFixed(2)}%`
                              : '0.00%'}
                          </p>
                        </>
                      ) : (
                        <div className='text-center'>
                          <p className='text-xl font-bold text-white mb-0 leading-none'>
                            {item.price.split('$')[1]}
                          </p>
                          <p className='text-sm text-muted mt-1'>{item.mark}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      ) : (
        // Fallback for SSR - show a simple grid with static data
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
          {pricedeta.map((item, index) => (
            <div key={index} className='px-5 py-6 bg-dark_grey/80 rounded-xl'>
              <div className='flex flex-col items-center gap-5'>
                <div
                  className={`${item.background} ${item.padding} rounded-full`}
                >
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={item.width}
                    height={item.height}
                  />
                </div>
                <p className='text-white text-xs font-normal'>
                  <span className='text-16 font-bold mr-2'>{item.title}</span>
                  {item.short}
                </p>
              </div>
              <div className='flex justify-center mt-2'>
                <div>
                  <p className='text-xl font-bold text-white mb-0 leading-none'>
                    {item.price.split('$')[1]}
                  </p>
                  <p className='text-sm text-muted mt-1'>{item.mark}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardSlider;
