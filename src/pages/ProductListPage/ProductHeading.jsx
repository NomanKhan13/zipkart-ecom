import { Star } from 'lucide-react';

const ProductHeading = ({ product }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
        <p className="text-lg font-semibold text-primary">${product.price}</p>
      </div>
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          {product.rating}
          <Star size={16} className="text-yellow-500" />
        </span>
        <span>{product.reviews?.length || 0} Reviews</span>
      </div>
    </div>
  );
};

export default ProductHeading;
