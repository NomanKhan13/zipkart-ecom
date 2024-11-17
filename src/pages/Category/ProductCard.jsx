import { useContext } from 'react';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { currency, converter } = useContext(CurrencyContext);

  return (
    <Link to={`/products/${product.id}`}>
      <div className="hover:opacity-80 cursor-pointer">
        <div className="h-80 bg-gray-200 rounded-md overflow-hidden shadow-md">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-4">
          <h3 className="text-slate-700 font-medium">{product.title}</h3>
          <p className="text-slate-900 font-semibold text-lg mt-1">
            {currency}
            {(product.price * converter).toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
