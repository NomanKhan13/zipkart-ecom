import { LoaderCircle } from 'lucide-react';

const AddToCartButton = ({
  handleAddToCart,
  handleGoToCart,
  isInCart,
  addingToCart,
}) => {
  console.log(isInCart);
  return (
    <button
      className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-colors shadow-md flex items-center gap-1"
      onClick={isInCart ? handleGoToCart : handleAddToCart}
    >
      {addingToCart && <LoaderCircle size={18} className="animate-spin" />}
      <span>{isInCart ? 'Go to Cart' : 'Add to Cart'}</span>
    </button>
  );
};

export default AddToCartButton;
