import { useState, useEffect } from 'react';
import { pricedeta } from '~/data';
import { useCryptoPrices } from './useCryptoPrices';

export interface CryptoOption {
  name: string;
  displayName: string;
  short: string;
  price: number;
  icon: string;
}

export function useCryptoDropdown() {
  const { priceMap } = useCryptoPrices();
  const [cryptoOptions, setCryptoOptions] = useState<CryptoOption[]>([]);

  useEffect(() => {
    const options: CryptoOption[] = pricedeta.map((coin) => {
      const coinData = priceMap[coin.title.toLowerCase()];
      const currentPrice = coinData?.usd || 0;

      return {
        name: coin.title,
        displayName: `${coin.title} ${coin.short}`,
        short: coin.short,
        price: currentPrice,
        icon: coin.icon,
      };
    }).filter(coin => coin.price > 0); // Only include coins with valid prices

    setCryptoOptions(options);
  }, [priceMap]);

  return {
    cryptoOptions,
    hasValidData: cryptoOptions.length > 0,
  };
}