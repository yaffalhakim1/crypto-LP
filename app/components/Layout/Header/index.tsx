import { Link } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import HeaderLink from '../Header/Navigation/HeaderLink';
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink';

import { headerData } from './Navigation/menuData';
import { ShimmerButton } from '~/components/Common/ShimmerButton';

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    if (navbarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [navbarOpen]);

  return (
    <header
      className={`fixed top-0 z-40 w-full pb-5 transition-all duration-300 ${
        sticky ? ' shadow-lg bg-darkmode pt-5' : 'shadow-none pt-7'
      }`}
    >
      <div className='py-2 lg:py-0'>
        <div className='container flex items-center justify-between px-4'>
          <Logo />
          <nav className='items-center justify-center hidden gap-8 lg:flex grow'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className='hidden lg:block'>
            <Link
              to={'https://play.google.com/store/apps'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <ShimmerButton>Try Free Now</ShimmerButton>
            </Link>
          </div>
          {/* Theme Toggler */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='block p-2 rounded-lg lg:hidden'
            aria-label='Toggle mobile menu'
          >
            <span className='block w-6 h-0.5 bg-white'></span>
            <span className='block w-6 h-0.5 bg-white mt-1.5'></span>
            <span className='block w-6 h-0.5 bg-white mt-1.5'></span>
          </button>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 z-40 w-full h-full bg-black/50' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
        >
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold text-midnight_text dark:text-midnight_text'>
              <Logo />
            </h2>

            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-8 mt-8 dark:invert"
              aria-label='Close menu Modal'
            ></button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className='w-full py-4 mt-4 border-t border-white/10'>
              <Link
                to={'https://play.google.com/store/apps'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <ShimmerButton>Try Free Now</ShimmerButton>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
