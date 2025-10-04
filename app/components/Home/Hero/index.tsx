import { Link } from 'react-router';
import { motion } from 'framer-motion';
import BuyCrypto from './buy-form';
import SellCrypto from './sell-form';
import CardSlider from './slider';
import { useEffect, useRef, useState, useCallback } from 'react';
import BrandLogo from '../BrandLogo';
import { useCryptoPrices } from '~/hooks/useCryptoPrices';
import { ShimmerButton } from '~/components/Common/ShimmerButton';
import { cn } from 'utils/cn';
import { ShinyChip } from '~/components/Common/ShinnyChip';
// import { Icon } from '@iconify/react';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [isBuying, setIsBuyingOpen] = useState(false);
  const [isSelling, setIsSellingOpen] = useState(false);
  const BuyRef = useRef<HTMLDivElement>(null);
  const SellRef = useRef<HTMLDivElement>(null);
  const { priceMap, loading, error, refetch } = useCryptoPrices();

  // Detect if we're on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (BuyRef.current && !BuyRef.current.contains(event.target as Node)) {
        setIsBuyingOpen(false);
      }
      if (SellRef.current && !SellRef.current.contains(event.target as Node)) {
        setIsSellingOpen(false);
      }
    },
    [BuyRef, SellRef]
  );

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [handleClickOutside, isClient]);

  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      document.body.style.overflow = isBuying || isSelling ? 'hidden' : '';
    }
  }, [isBuying, isSelling, isClient]);

  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <section
      className='relative py-24 pt-48 overflow-hidden z-1'
      id='main-banner'
    >
      <div className='container'>
        <div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
          <motion.div {...fadeInAnimation} className='flex flex-col gap-10'>
            <div className='flex flex-col gap-4 text-center md:text-left'>
              <div className='flex items-center justify-center gap-6 lg:justify-start'>
                {/* <div className='py-1.5 px-4 bg-primary/10 rounded-full border border-white/10'>
                  <span className='font-medium text-primary'>
                    Future of crypto trading
                  </span>
                </div> */}
                <div
                  className={cn(
                    'group rounded-full border border-black/5 bg-primary/10 text-base text-white transition-all ease-in hover:cursor-pointer '
                  )}
                >
                  <ShinyChip className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
                    <span>✨ Future of crypto trading</span>
                  </ShinyChip>
                </div>
              </div>
              <h1 className='font-medium xl:text-[72px] lg:text-6xl md:text-54 sm:text-5xl text-4xl md:text-start text-center text-white'>
                Crypgo: Fast and Secure Cryptocurrency Exchange
              </h1>
              <p className='text-white'>
                Trade cryptocurrencies with ease, security, and advanced
                features on Crypgo's cutting-edge platform.
              </p>
            </div>
            {/* <div className='flex items-center justify-center gap-8 md:justify-start'>
              <Link
                to={'/#work'}
                className='flex items-center gap-2 py-3 font-semibold border rounded-lg cursor-pointer bg-primary hover:bg-primary/80 border-primary text-darkmode px-7'
              >
                Explore More
                <img
                  src={'/images/icons/icon-arrow.svg'}
                  alt='arrow-icon'
                  width={20}
                  height={20}
                  className='inline-block'
                  loading='eager'
                  decoding='async'
                />
              </Link>
            </div> */}
            <div className='flex items-center justify-center gap-8 md:justify-start'>
              <Link to={'/#work'}>
                <ShimmerButton>
                  <span className='text-sm font-medium leading-none tracking-tight text-center text-white whitespace-pre-wrap lg:text-lg dark:from-white dark:to-slate-900/10'>
                    Explore More
                  </span>
                </ShimmerButton>
              </Link>
            </div>
          </motion.div>
          <motion.div {...fadeInAnimation} className=''>
            <div className='w-full h-full'>
              <img
                src='/images/hero/hero-banner-img.png'
                alt='Banner'
                width={584}
                height={582}
                className='object-cover w-full h-full'
                loading='eager'
                decoding='async'
              />
            </div>
          </motion.div>
        </div>
        <BrandLogo />
        <CardSlider
          priceMap={priceMap}
          loading={loading}
          error={error}
          onRetry={refetch}
        />
      </div>

      {/* Only render interactive parts on client side */}
      {isClient && (
        <>
          {/* Modals for Buy and Sell */}
          {isBuying && (
            <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/50'>
              <div
                ref={BuyRef}
                className='relative w-full max-w-md px-8 pb-8 overflow-hidden text-center rounded-lg pt-14 z-999 bg-dark_grey/90 backdrop-blur-md'
              >
                <button
                  onClick={() => setIsBuyingOpen(false)}
                  className='absolute top-0 right-0 mt-8 mr-8 dark:invert'
                  aria-label='Close Buy Modal'
                >
                  {/* <Icon
                    icon='tabler:currency-xrp'
                    className='inline-block text-white hover:text-primary text-24 me-2'
                  /> */}
                  <span className='inline-block text-white hover:text-primary text-24 me-2'>
                    ×
                  </span>
                </button>
                <BuyCrypto />
              </div>
            </div>
          )}
          {isSelling && (
            <div className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/50'>
              <div
                ref={SellRef}
                className='relative w-full max-w-md px-8 pb-8 overflow-hidden text-center rounded-lg pt-14 z-999 bg-dark_grey/90 backdrop-blur-md'
              >
                <button
                  onClick={() => setIsSellingOpen(false)}
                  className='absolute top-0 right-0 mt-8 mr-8 dark:invert'
                  aria-label='Close Sell Modal'
                >
                  {/* <Icon
                    icon='tabler:currency-xrp'
                    className='inline-block text-white hover:text-primary text-24 me-2'
                  /> */}
                  <span className='inline-block text-white hover:text-primary text-24 me-2'>
                    ×
                  </span>
                </button>
                <SellCrypto />
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Hero;
