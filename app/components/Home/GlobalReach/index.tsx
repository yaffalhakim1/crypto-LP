import { GlobalReachData } from './data';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Globe } from '~/components/Common/Globe';

const GlobalReach = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <section className='relative py-20'>
      <div className='container'>
        <div className='relative h-[400px] md:h-[600px] mb-10'>
          <Globe />
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10'>
          {GlobalReachData.map((item, index) => {
            return (
              <div
                key={index}
                className='flex flex-col items-center gap-4 px-5 py-4 border rounded-md border-white/10 bg-white/5 md:py-8 md:px-6'
              >
                <h3 ref={ref} className='text-3xl font-black text-primary'>
                  {item.prefix && item.prefix}
                  {item.count == 247 ? (
                    '24/7'
                  ) : inView ? (
                    <CountUp start={0} end={item.count} duration={3} />
                  ) : (
                    '0'
                  )}
                  {item.postfix && item.postfix}
                </h3>
                <p className=' text-white/80'>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
