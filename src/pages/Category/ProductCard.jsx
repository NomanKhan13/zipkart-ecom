import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { Link } from "react-router-dom";
import Typography from "../../components/Typography";

const ProductCard = ({ product }) => {
  const { currency, converter } = useContext(CurrencyContext);

  return (
    <Link to={`/products/${product.id}`}>
      
      <div className="group cursor-pointer rounded-2xl bg-white border border-zinc-200 shadow-md transition-all duration-300 flex flex-col">
        <div className="h-60 sm:h-72 w-full overflow-hidden rounded-t-2xl bg-zinc-50">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="flex flex-col gap-1 p-4">
          
          <h4 className="line-clamp-1 text-[#272343] text-xl">
             
            {product.title}
          </h4>

          <p className="text-zinc-600 text-sm line-clamp-2">{product.description}</p>

          <p className="text-[#272343] font-semibold text-lg mt-1">
            {currency}
            {(product.price * converter).toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
