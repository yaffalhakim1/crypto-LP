import { useState, useEffect, useCallback, useMemo } from 'react';
import {
  createStandardError,
  shouldRetry,
  getRetryDelay,
  extractErrorMessage,
} from 'utils';
import { pricedeta } from '~/data';

interface CryptoPrice {
  usd: number;
  usd_24h_change: number;
}

interface UseCryptoPricesResult {
  prices: Record<string, CryptoPrice>;
  loading: boolean;
  error: string | null;
  refetch: () => void;
  priceMap: Record<string, CryptoPrice | null>;
}

const RETRY_ATTEMPTS = 3;
const REFRESH_INTERVAL = 30000; // 30 seconds
const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export function useCryptoPrices(): UseCryptoPricesResult {
  const [prices, setPrices] = useState<Record<string, CryptoPrice>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  // Create optimized price map for efficient lookup
  const priceMap = useMemo(() => {
    return pricedeta.reduce(
      (acc, coin) => {
        const apiId = getCoinGeckoId(coin.title);
        acc[coin.title.toLowerCase()] = prices[apiId] || null;
        return acc;
      },
      {} as Record<string, CryptoPrice | null>
    );
  }, [prices]);

  // Helper function to map coin names to CoinGecko IDs
  function getCoinGeckoId(title: string): string {
    const idMap: Record<string, string> = {
      Bitcoin: 'bitcoin',
      Ethereum: 'ethereum',
      Polkadot: 'polkadot',
      Litecoin: 'litecoin',
      Solana: 'solana',
      Dogecoin: 'dogecoin',
    };
    return idMap[title] || title.toLowerCase();
  }

  const fetchPrices = useCallback(
    async (isRetry = false) => {
      if (!isRetry) {
        setLoading(true);
        setError(null);
      }

      try {
        const coinIds = pricedeta
          .map((coin) => getCoinGeckoId(coin.title))
          .join(',');
        const response = await fetch(
          `${API_BASE_URL}/simple/price?ids=${coinIds}&vs_currencies=usd&include_24hr_change=true`,
          {
            signal: AbortSignal.timeout(5000), // 5 second timeout
            headers: {
              Accept: 'application/json',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        setPrices(data);
        setError(null);
        setRetryCount(0);
      } catch (err) {
        const standardError = createStandardError(err);

        if (shouldRetry(standardError, retryCount, RETRY_ATTEMPTS)) {
          const delay = getRetryDelay(retryCount);
          setTimeout(() => {
            setRetryCount((prev) => prev + 1);
            fetchPrices(true);
          }, delay);
        } else {
          setError(extractErrorMessage(standardError));
          if (!isRetry) {
            setRetryCount(0);
          }
        }
      } finally {
        if (!isRetry) {
          setLoading(false);
        }
      }
    },
    [retryCount]
  );

  // Initial fetch
  useEffect(() => {
    fetchPrices();
  }, [fetchPrices]);

  // Set up interval for real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      fetchPrices();
    }, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return {
    prices,
    loading,
    error,
    refetch: fetchPrices,
    priceMap,
  };
}
