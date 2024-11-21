const CartShimmer = () => {
    return (
      <div className="flex flex-col justify-center py-12 px-4 md:px-8">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl mb-8 font-semibold text-center text-slate-800 animate-pulse">
            Shopping Cart
          </h2>
  
          {/* Shimmer for cart items */}
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="w-full max-w-2xl border-t border-slate-300 p-4 mb-4 shadow shadow-primary/15 rounded animate-pulse"
            >
              <div className="flex gap-4">
                {/* Placeholder for product image */}
                <div className="h-36 w-36 bg-slate-300 rounded animate-pulse"></div>
  
                {/* Placeholder for product details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <div>
                      <div className="h-5 w-32 bg-slate-300 rounded animate-pulse"></div>
                      <div className="h-4 w-48 bg-slate-300 rounded mt-2 animate-pulse"></div>
                    </div>
                    <div className="h-6 w-16 bg-slate-300 rounded animate-pulse"></div>
                  </div>
  
                  {/* Placeholder for quantity and remove button */}
                  <div className="flex items-end justify-between mt-4">
                    <div className="h-8 w-24 bg-slate-300 rounded-full animate-pulse"></div>
                    <div className="h-8 w-16 bg-slate-300 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
  
          {/* Shimmer for subtotal and checkout */}
          <div className="py-8 border-t border-slate-300 w-full max-w-2xl animate-pulse">
            <div className="flex items-center justify-between mb-2">
              <div className="h-6 w-24 bg-slate-300 rounded animate-pulse"></div>
              <div className="h-6 w-24 bg-slate-300 rounded animate-pulse"></div>
            </div>
            <div className="text-sm text-slate-500 mt-2 h-4 w-32 bg-slate-300 rounded animate-pulse"></div>
          </div>
  
          {/* Shimmer for checkout button */}
          <div className="w-full max-w-2xl h-12 bg-slate-300 rounded animate-pulse mt-4"></div>
        </div>
      </div>
    );
  };
  
  export default CartShimmer;
  