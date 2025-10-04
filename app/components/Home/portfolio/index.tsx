import { portfolioData } from '../../../data';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <section className='pt-12' id='portfolio'>
      <div className='container px-4 sm:px-6'>
        <div className='grid items-center gap-20 lg:grid-cols-2'>
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className='lg:-ml-32'
          >
            <img
              src='/images/portfolio/img-portfolio.png'
              alt='Crypto Portfolio'
              width={780}
              height={700}
            />
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className='flex flex-col gap-4'>
              <h2 className='mb-4 font-medium text-white sm:text-40 text-30'>
                Create your cryptocurrency portfolio today
              </h2>
            </div>
            <p className='text-muted/60 text-18'>
              Crypgo has a variety of features that make it the best place to
              start trading.
            </p>

            <table className='w-full sm:w-[80%] mt-10'>
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr key={index} className='border-b border-dark_border/10'>
                    <td className='py-5'>
                      <div className='p-3 rounded-full bg-primary/20 w-fit'>
                        <img
                          src={item.image}
                          alt={item.title}
                          width={24}
                          height={24}
                        />
                      </div>
                    </td>
                    <td className='py-5'>
                      <h4 className='ml-5 text-xl text-muted'>{item.title}</h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
