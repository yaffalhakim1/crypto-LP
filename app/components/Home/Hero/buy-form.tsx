import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import {
  useCryptoDropdown,
  type CryptoOption,
} from '../../../hooks/useCryptoDropdown';
import Logo from '~/components/Layout/Header/Logo';

const BuyCrypto = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    displayName: string;
    price: number;
    amount: string;
    paymentMethod: string;
  }>({
    name: '',
    displayName: '',
    price: 0,
    amount: '',
    paymentMethod: 'creditCard',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cryptoOptions, hasValidData } = useCryptoDropdown();

  useEffect(() => {
    if (hasValidData && cryptoOptions.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        name: cryptoOptions[0].name,
        displayName: cryptoOptions[0].displayName,
        price: cryptoOptions[0].price,
      }));
    }
  }, [cryptoOptions, hasValidData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'amount') {
      // Prevent negative values and zero
      const numValue = parseFloat(value);
      if (value === '' || (numValue >= 0.01 && !isNaN(numValue))) {
        setFormData((prevData) => ({ ...prevData, amount: value }));
      }
    }
  };

  const handleDropdownSelect = (crypto: CryptoOption) => {
    setFormData((prevData) => ({
      ...prevData,
      name: crypto.name,
      displayName: crypto.displayName,
      price: crypto.price,
    }));
    setIsDropdownOpen(false);
  };

  const totalCost = formData.amount
    ? (formData.price * parseFloat(formData.amount)).toFixed(2)
    : '0.00';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Crypto purchase successful!');
      setFormData((prevData) => ({ ...prevData, amount: '' }));
    } catch (error) {
      toast.error('An error occurred during the purchase.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='max-w-md p-4 mx-auto'>
      <div className='flex justify-center mb-16'>
        <Logo />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='relative mb-4'>
          <div
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className='px-3 py-2 text-white bg-transparent border rounded-md cursor-pointer border-dark_border/60 text-start'
          >
            {formData.name}
          </div>
          {isDropdownOpen && (
            <div className='absolute z-10 w-full mt-1 overflow-y-auto border rounded-md bg-dark border-dark_border/60 max-h-60'>
              {hasValidData ? (
                cryptoOptions.map((crypto) => (
                  <div
                    key={crypto.name}
                    onClick={() => handleDropdownSelect(crypto)}
                    className='flex items-center gap-2 px-3 py-2 text-white cursor-pointer bg-dark_grey hover:text-darkmode hover:bg-primary'
                  >
                    <img
                      src={crypto.icon}
                      alt={`${crypto.name} icon`}
                      className='w-5 h-5'
                      width={20}
                      height={20}
                    />
                    <div>
                      <div className='font-medium'>{crypto.name}</div>
                      <div className='text-xs text-gray-400'>
                        {crypto.short}
                      </div>
                    </div>
                    <div className='ml-auto text-sm text-green-400'>
                      ${crypto.price.toFixed(2)}
                    </div>
                  </div>
                ))
              ) : (
                <div className='px-3 py-4 text-center text-gray-400'>
                  Loading crypto data...
                </div>
              )}
            </div>
          )}
        </div>
        <div className='mb-4'>
          <input
            id='crypto-price'
            type='text'
            name='price'
            className='w-full px-3 py-2 text-white bg-transparent border rounded-md border-dark_border/60 focus:border-primary focus-visible:outline-0'
            value={`$${formData.price.toLocaleString()}`}
            disabled
            required
          />
        </div>
        <div className='mb-4'>
          <input
            id='amount'
            type='number'
            name='amount'
            placeholder='Amount'
            value={formData.amount}
            onChange={handleChange}
            min='0.01'
            step='0.01'
            required
            className='w-full px-3 py-2 text-white bg-transparent border rounded-md border-dark_border/60 focus:border-primary focus-visible:outline-0'
          />
        </div>
        <div className='flex justify-between mb-4 text-white'>
          <p>Total Cost: </p>
          <p>${totalCost}</p>
        </div>
        <button className='w-full py-3 font-medium border rounded-lg text-darkmode text-18 bg-primary border-primary hover:text-primary hover:bg-transparent'>
          Buy
        </button>
      </form>
    </div>
  );
};

export default BuyCrypto;
