import { perksData } from '../../../data';
import BetterImage from '../../Common/BetterImage';
import { motion } from 'framer-motion';

const Perks = () => {
  return (
    <section className='relative pb-28'>
      <div className='container relative px-4 z-2'>
        <div className='text-center'>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='flex flex-col gap-4'
          >
            <p className='relative text-base text-muted'>
              Always By <span className='text-primary'>your side</span>
            </p>
            <h2 className='font-medium text-white sm:text-40 text-30'>
              Be the first to use our Crypgo!
            </h2>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='grid gap-10 px-20 py-16 mt-16 bg-center bg-no-repeat border border-border/20 lg:grid-cols-3 sm:grid-cols-2 rounded-3xl sm:bg-perk bg-dark_grey/35 lg:bg-bottom'
          >
            {perksData.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className='flex flex-col items-center justify-end text-center'
              >
                <div className='p-4 rounded-full bg-primary/25 backdrop-blur-xs w-fit'>
                  <BetterImage
                    src={item.icon}
                    alt={item.title}
                    width={44}
                    height={44}
                    quality={95}
                  />
                </div>
                <h4 className={`text-white text-28 mb-4 ${item.space}`}>
                  {item.title}
                </h4>
                <div
                  className='text-muted/60'
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className='absolute bottom-0 z-0 rounded-full bg-linear-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 sm:-bottom-80 blur-400 sm:-left-48 opacity-60'></div>
    </section>
  );
};

export default Perks;
