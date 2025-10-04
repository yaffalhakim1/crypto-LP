import type { Route } from './+types/home';

import Work from '~/components/Home/work';
import Hero from '~/components/Home/Hero';
import Faq from '~/components/Home/Faq';
import GlobalReach from '~/components/Home/GlobalReach';
import Perks from '~/components/Home/perks';
import Portfolio from '~/components/Home/portfolio';
import TimeLine from '~/components/Home/timeline';
import Upgrade from '~/components/Home/upgrade';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Crypgo - Fast & Secure Cryptocurrency Exchange' },
    {
      name: 'description',
      content:
        'Trade cryptocurrencies with ease, security, and advanced features on Crypgo, the cutting-edge cryptocurrency exchange. Real-time prices, secure trading, and more.',
    },
  ];
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Work />
      <GlobalReach />
      <TimeLine />
      <Portfolio />
      <Upgrade />
      <Perks />
      <Faq />
    </div>
  );
}
