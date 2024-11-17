const SingleProductShimmer = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-72 h-96 border border-secondary/20 animate-pulse">
      <div className="bg-gray-300 h-48 w-full rounded mb-4"></div>
      <div className="bg-gray-300 h-5 w-3/4 rounded mb-2"></div>
      <div className="bg-gray-300 h-4 w-1/2 rounded mb-4"></div>
      <div className="bg-gray-300 h-5 w-1/3 rounded mb-2"></div>
      <div className="bg-gray-300 h-6 w-full rounded mt-4"></div>
    </div>
  );
};

const ProductListingPageShimmer = () => {
  return (
    <div className="flex flex-wrap gap-6 justify-center">
      {Array.from({ length: 6 }).map((_, index) => (
        <SingleProductShimmer key={index} />
      ))}
    </div>
  );
};

export default ProductListingPageShimmer;
