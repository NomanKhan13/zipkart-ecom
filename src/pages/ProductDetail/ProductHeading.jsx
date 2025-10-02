import Typography from "../../components/Typography";
import StarRatingView from "../../components/StarRatingView";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";

const ProductHeading = ({ product }) => {
  const { currency, converter } = useContext(CurrencyContext);

  return (
    <div className="space-y-2">
      <Typography variant="h2" weight="font-semibold" color="text-zinc-900">
        {product.title}
      </Typography>
      <p className="text-lg lg:text-2xl font-semibold text-[#272343]">
        {currency}{(product.price * converter).toLocaleString()}
      </p>
      <StarRatingView rating={product.rating} />
    </div>
  );
};

export default ProductHeading;
