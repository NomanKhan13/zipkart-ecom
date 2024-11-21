import { createContext, useState } from 'react';

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState('₹');
  const [converter, setConverter] = useState(84);

  const handleCurrencyChange = (newCurrency) => {
    console.log("here");
    setCurrency(newCurrency);
    switch (newCurrency) {
      case '$':
        setConverter(1);
        break;
      case '₹':
        setConverter(84);
        break;
      case 'CA$':
        setConverter(1.38);
        break;
      case '€':
        setConverter(0.92);
        break;
      default:
        setConverter(1);
    }
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, converter, handleCurrencyChange }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
