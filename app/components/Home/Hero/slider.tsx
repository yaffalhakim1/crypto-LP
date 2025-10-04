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
  onBuyClick?: () => void;
  onSellClick?: () => void;
}

const CardSlider = ({
  priceMap,
  loading,
  error,
  onRetry,
  onBuyClick,
  onSellClick,
}: CardSliderProps) => {
  const [isClient, setIsClient] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    setIsClient(true);

    // Set initial slides based on window width
    const updateSlidesToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesToShow(1);
      } else if (width < 992) {
        setSlidesToShow(2);
      } else if (width < 1200) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    autoplay: true,
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
  };

  return (
    <div className='flex flex-col gap-10 pt-14'>
      <div className='flex flex-col items-center justify-center gap-3 text-center'>
        <p className='font-medium text-white'>
          Featured <span className='text-primary'>crypto coins</span>
        </p>
        <h2 className='font-medium text-white sm:text-40 text-30'>
          Top crypto coins updates
        </h2>
        {onBuyClick && onSellClick && (
          <div className='flex justify-center gap-4 mt-6'>
            <button
              onClick={onBuyClick}
              className='px-6 py-3 font-medium text-white transition-all rounded-xl bg-primary hover:bg-transparent hover:text-primary hover:cursor-pointer'
            >
              Buy Crypto
            </button>
            <button
              onClick={onSellClick}
              className='px-6 py-3 font-medium transition-all bg-transparent border rounded-xl text-primary border-primary hover:bg-primary hover:text-darkmode hover:cursor-pointer'
            >
              Sell Crypto
            </button>
          </div>
        )}
      </div>

      {error && (
        <div className='py-8 text-center'>
          <p className='mb-4 text-red-400'>{error}</p>
          <button
            onClick={onRetry}
            className='px-6 py-2 text-white transition-colors rounded-lg bg-primary hover:bg-primary/80'
          >
            Retry
          </button>
        </div>
      )}

      {isClient ? (
        <div className='w-full overflow-hidden'>
          <Slider {...settings}>
            {pricedeta.map((item, index) => {
              const coinData = priceMap[item.title.toLowerCase()];
              const price = coinData?.usd;
              const change = coinData?.usd_24h_change;

              return (
                <div key={index} className='px-2'>
                  <div className='px-5 py-6 mx-1 transition-all duration-300 bg-dark_grey/80 rounded-xl hover:bg-dark_grey/90'>
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
                      <p className='text-xs font-normal text-white'>
                        <span className='mr-2 font-bold text-16'>
                          {item.title}
                        </span>
                        {item.short}
                      </p>
                    </div>
                    <div className='flex justify-center mt-2'>
                      <div className='text-center'>
                        {loading && !price ? (
                          <div className='animate-pulse'>
                            <div className='w-20 h-6 mb-2 bg-gray-600 rounded'></div>
                            <div className='w-16 h-4 bg-gray-600 rounded'></div>
                          </div>
                        ) : price ? (
                          <>
                            <p className='mb-0 text-xl font-bold leading-none text-white transition-all duration-300'>
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
                            <p className='mb-0 text-xl font-bold leading-none text-white'>
                              {item.price.split('$')[1]}
                            </p>
                            <p className='mt-1 text-sm text-muted'>
                              {item.mark}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        // Fallback for SSR - show a simple grid with static data
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4'>
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
                <p className='text-xs font-normal text-white'>
                  <span className='mr-2 font-bold text-16'>{item.title}</span>
                  {item.short}
                </p>
              </div>
              <div className='flex justify-center mt-2'>
                <div>
                  <p className='mb-0 text-xl font-bold leading-none text-white'>
                    {item.price.split('$')[1]}
                  </p>
                  <p className='mt-1 text-sm text-muted'>{item.mark}</p>
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
