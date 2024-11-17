const ProductCardShimmer = () => {
  return (
    <div>
      <div className="h-80 animate-pulse bg-gray-300 overflow-hidden rounded-md shadow-md"></div>
      <div className="py-4">
        <h3 className="bg-gray-300 h-8 w-3/4"></h3>
        <p className="bg-gray-300 h-12 w-12 mt-1"></p>
      </div>
    </div>
  );
};

export default ProductCardShimmer;
