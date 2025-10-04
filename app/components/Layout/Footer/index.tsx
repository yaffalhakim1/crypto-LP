import React, { type FC } from 'react';
import { Link } from 'react-router';
import { headerData } from '../Header/Navigation/menuData';
import { Icon } from '@iconify/react';
import Logo from '../Header/Logo';
import { footerlabels } from '~/data';

const Footer: FC = () => {
  return (
    <footer className='pt-16 bg-darkmode'>
      <div className='container px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-11 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16'>
          <div className='lg:col-span-4 md:col-span-6 col-span-6 flex flex-col gap-6'>
            <Logo />
            <p className='text-white/60'>
              Experience secure and efficient cryptocurrency trading with Crypgo.
              Join thousands of traders who trust our platform for lightning-fast
              execution and bank-level security.
            </p>
            <div className='flex gap-6 items-center relative z-1'>
              <Link to='https://www.facebook.com/' className='group'>
                <Icon
                  icon='fa6-brands:facebook-f'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
              <Link to='https://www.instagram.com/' className='group'>
                <Icon
                  icon='fa6-brands:instagram'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
              <Link to='https://www.twitter.com/' className='group'>
                <Icon
                  icon='fa6-brands:x-twitter'
                  width='24'
                  height='24'
                  className='text-white group-hover:text-primary'
                />
              </Link>
            </div>
          </div>
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className='pb-4'>
                  <Link
                    to={item.href}
                    className='text-white/60 hover:text-primary text-17'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-2 md:col-span-3 col-span-6'>
            <h4 className='text-white mb-4 font-medium text-24'>Other Pages</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className='pb-4'>
                  <Link
                    to={item.herf}
                    className='text-white/60 hover:text-primary text-17'
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='lg:col-span-3 md:col-span-4 col-span-6'>
            <h3 className='text-white text-24 font-medium mb-4'>
              Download app
            </h3>
            <div className='flex flex-col gap-4'>
              <Link to={'https://www.google.com/'}>
                <img
                  src={'/images/footer/app-store-bedge.svg'}
                  alt='play-store-bedge'
                  width={126}
                  height={23}
                />
              </Link>
              <Link to={'https://www.apple.com/'}>
                <img
                  src={'/images/footer/app-store.svg'}
                  alt='play-store-bedge'
                  width={126}
                  height={23}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
