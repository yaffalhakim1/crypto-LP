import { timelineData } from '../../../data';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import BetterImage from '../../Common/BetterImage';

const TimeLine = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };
  return (
    <section className='md:pt-40 pt-9' id='development'>
      <div className='container px-4 lg:px-16'>
        <div className='text-center'>
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: '-100%', opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='flex flex-col gap-4'>
              <p className='font-medium text-white'>
                Our <span className='text-primary'>trading process</span>
              </p>
              <h2 className='text-white sm:text-40 text-30 font-medium lg:w-80% mx-auto mb-20'>
                Simple steps to start trading cryptocurrencies securely and
                efficiently
              </h2>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className='relative hidden md:block'>
              <div>
                <BetterImage
                  src='/images/timeline/img-timeline.png'
                  alt='Timeline illustration'
                  className='object-contain w-3/5 h-auto mx-auto'
                  quality={75}
                />
              </div>
              <div className='absolute flex items-center gap-6 lg::top-40 top-36 lg:left-0 -left-20 w-72'>
                <div className='text-right'>
                  <h5 className='mb-3 text-muted text-28'>Sign Up</h5>
                  <p className='text-18 text-muted/60'>
                    Create your account in minutes with instant verification
                  </p>
                </div>
                <div className='px-6 py-2 rounded-full bg-light_grey/45 backdrop-blur-xs h-fit'>
                  <BetterImage
                    src='/images/solution/solution-icon-1.svg'
                    alt='Sign Up'
                    width={44}
                    height={44}
                    // className='w-16 h-16'
                    quality={95}
                  />
                </div>
              </div>
              <div className='absolute flex items-center gap-6 lg:top-40 top-36 lg:right-0 -right-20 w-72'>
                <div className='p-6 rounded-full bg-light_grey/45 backdrop-blur-xs h-fit'>
                  <BetterImage
                    src='/images/solution/solution-icon-2.svg'
                    alt='Refinement'
                    width={44}
                    height={44}
                    quality={95}
                  />
                </div>
                <div className='text-left'>
                  <h5 className='mb-3 text-muted text-28'>Deposit Funds</h5>
                  <p className='text-18 text-muted/60'>
                    Add crypto or fiat using multiple secure payment methods
                  </p>
                </div>
              </div>
              <div className='absolute flex items-center gap-6 lg:bottom-48 bottom-36 lg:left-0 -left-20 w-72'>
                <div className='text-right'>
                  <h5 className='mb-3 text-muted text-28'>Start Trading</h5>
                  <p className='text-18 text-muted/60'>
                    Buy, sell, and trade 100+ cryptocurrencies with ease
                  </p>
                </div>
                <div className='px-6 py-2 rounded-full bg-light_grey/45 backdrop-blur-xs h-fit'>
                  <BetterImage
                    src='/images/solution/solution-icon-3.svg'
                    alt='Start Trading'
                    width={44}
                    height={44}
                    className='w-16 h-16'
                    quality={95}
                  />
                </div>
              </div>
              <div className='absolute flex items-center gap-6 lg:bottom-48 bottom-36 lg:right-0 -right-20 w-72'>
                <div className='px-6 py-2 rounded-full bg-light_grey/45 backdrop-blur-xs h-fit'>
                  <BetterImage
                    src='/images/solution/solution-icon-4.svg'
                    alt='Scale and support'
                    width={44}
                    height={44}
                    className='w-16 h-16'
                    quality={95}
                  />
                </div>
                <div className='text-left'>
                  <h5 className='mb-3 text-muted text-nowrap text-28'>
                    24/7 Support
                  </h5>
                  <p className='text-18 text-muted/60'>
                    Get expert assistance whenever you need it
                  </p>
                </div>
              </div>
            </div>
            <div className='grid gap-8 sm:grid-cols-2 md:hidden'>
              {timelineData.map((item, index) => (
                <div key={index} className='flex items-center gap-6'>
                  <div className='p-6 rounded-full bg-light_grey/45'>
                    <BetterImage
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                      quality={95}
                    />
                  </div>
                  <div className='text-start'>
                    <h4 className='mb-2 text-28 text-muted'>{item.title}</h4>
                    <p className='text-muted/60 text-18'>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
