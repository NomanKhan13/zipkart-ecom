const ProductImage = ({ product }) => {
  return (
    <img
      src={product.images[0]}
      alt={product.title}
      className="h-full w-auto rounded-lg object-cover"
    />
  );
};

export default ProductImage;
