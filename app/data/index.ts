export const footerlabels: { label: string; herf: string }[] = [
  { label: 'Terms', herf: '#' },
  { label: 'Disclosures', herf: '#' },
  { label: 'Latest News', herf: '#' },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: 'Bitcoin',
    short: 'BTC/USD',
    icon: '/images/icons/icon-bitcoin.svg',
    background: 'bg-warning/20',
    price: '$93,291.24',
    mark: '$94,040.99 (-0.9%)',
    width: 18,
    height: 23,
    padding: 'px-4 py-3',
  },
  {
    title: 'Ethereum',
    short: 'ETH/USD',
    icon: '/images/icons/icon-ethereum.svg',
    background: 'bg-light_grey',
    price: '$3,128.84',
    mark: '$4,878.26 (-35.9%)',
    width: 18,
    height: 23,
    padding: 'px-4 py-2',
  },
  {
    title: 'Polkadot',
    short: 'BTC/USD',
    icon: '/images/icons/icon-bitcoin-circle.svg',
    background: 'bg-warning/20',
    price: '$443.27',
    mark: '$3,785.82 (-88.3%)',
    width: 46,
    height: 46,
    padding: 'px-0 py-0',
  },
  {
    title: 'Litecoin',
    short: 'LTC/USD',
    icon: '/images/icons/icon-litecoin.svg',
    background: 'bg-light_grey',
    price: '$86.11',
    mark: '$410.26 (-79.1%)',
    width: 18,
    height: 23,
    padding: 'px-4 py-3',
  },
  {
    title: 'Solana',
    short: 'SOL/USD',
    icon: '/images/icons/icon-solana.svg',
    background: 'bg-light_grey',
    price: '$238.70',
    mark: '$259.96 (-8.2%)',
    width: 24,
    height: 24,
    padding: 'px-4 py-3',
  },
  {
    title: 'Dogecoin',
    short: 'DOGE/USD',
    icon: '/images/icons/icon-dogecoin.svg',
    background: 'bg-light_grey',
    price: '$0.394',
    mark: '$0.7316 (-46.2%)',
    width: 46,
    height: 46,
    padding: 'px-0 py-0',
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: '/images/portfolio/portfolio-icon-1.svg',
    title: 'Real-time Portfolio Tracking',
  },
  {
    image: '/images/portfolio/portfolio-icon-2.svg',
    title: 'Cold Storage Security',
  },
  {
    image: '/images/portfolio/portfolio-icon-3.svg',
    title: 'Mobile Trading App',
  },
];

export const upgradeData: { title: string }[] = [
  { title: 'Bank-level Security' },
  { title: 'Low Trading Fees' },
  { title: 'Instant Deposits' },
  { title: 'High-Speed Trading' },
  { title: 'Advanced Charts' },
  { title: 'Multi-Asset Support' },
  { title: 'Mobile Trading App' },
  { title: '24/7 Customer Support' },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: '/images/perks/peak-icon-1.svg',
    title: '24/7 Support',
    text: 'Get expert assistance whenever you need it with our dedicated support team.',
    space: 'lg:mt-8',
  },
  {
    icon: '/images/perks/peak-icon-2.svg',
    title: 'Trading Community',
    text: 'Join thousands of traders sharing insights and strategies in our community.',
    space: 'lg:mt-14',
  },
  {
    icon: '/images/perks/peak-icon-3.svg',
    title: 'Crypto Academy',
    text: 'Learn blockchain & cryptocurrency trading with our free educational resources.',
    space: 'lg:mt-4',
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: '/images/timeline/icon-planning.svg',
    title: 'Sign Up',
    text: "Create your account in minutes with instant verification",
    position: 'md:top-0 md:left-0',
  },
  {
    icon: '/images/timeline/icon-refinement.svg',
    title: 'Deposit Funds',
    text: 'Add crypto or fiat using multiple secure payment methods',
    position: 'md:top-0 md:right-0',
  },
  {
    icon: '/images/timeline/icon-prototype.svg',
    title: 'Start Trading',
    text: 'Buy, sell, and trade 100+ cryptocurrencies with ease',
    position: 'md:bottom-0 md:left-0',
  },
  {
    icon: '/images/timeline/icon-support.svg',
    title: '24/7 Support',
    text: 'Get expert assistance whenever you need it',
    position: 'md:bottom-0 md:right-0',
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: 'Bitcoin BTC/USD', price: 67646.84 },
  { name: 'Ethereum ETH/USD', price: 2515.93 },
  { name: 'Bitcoin Cash BTC/USD', price: 366.96 },
  { name: 'Litecoin LTC/USD', price: 61504.54 },
];
