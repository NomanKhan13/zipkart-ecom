import { useContext } from 'react';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { Link } from 'react-router-dom';
import Typography from '../../components/Typography';

const ProductCard = ({ product }) => {
  const { currency, converter } = useContext(CurrencyContext);
  console.log(product.price.toLocaleString())
  return (
    <Link to={`/products/${product.id}`}>
      <div className="hover:opacity-80 cursor-pointer">
        <div className="h-80 bg-gray-gradient border border-slate-400 rounded-md overflow-hidden shadow-md">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="py-4">
          
          <Typography variant="h3" weight="font-medium" color="text-slate-600">{product.title}</Typography>
          <p className="text-slate-900 font-semibold text-lg mt-1">
            {currency}
            {((product.price * converter).toLocaleString())}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
