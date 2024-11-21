const Shimmer = ({ className }) => {
    return (
        <div className={`animate-pulse bg-gray-300 ${className}`} />
    );
};




const ProductDetailShimmer = () => {
    return (
        <div className="flex justify-center py-12 px-8">
            <div className="w-full max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product Image Section */}
                    <div className="w-full lg:w-1/2">
                        <Shimmer className="h-96 w-full rounded-md" />
                    </div>

                    {/* Product Details Section */}
                    <div className="flex-1 space-y-6">
                        {/* Heading */}
                        <Shimmer className="h-8 w-3/4 rounded" />
                        <Shimmer className="h-4 w-1/2 rounded" />

                        {/* Description */}
                        <Shimmer className="h-16 w-full rounded" />

                        {/* Buttons */}
                        <div className="flex items-center gap-4">
                            <Shimmer className="h-10 w-32 rounded-md" />
                            <Shimmer className="h-10 w-10 rounded-full" />
                        </div>

                        {/* Highlights */}
                        <Shimmer className="h-6 w-3/4 rounded" />
                        <Shimmer className="h-6 w-1/2 rounded" />
                    </div>
                </div>

                {/* Reviews Section */}
                <div className="mt-12 space-y-4">
                    <Shimmer className="h-6 w-1/3 rounded" />
                    <Shimmer className="h-16 w-full rounded" />
                    <Shimmer className="h-16 w-full rounded" />
                </div>

                {/* Customers Also Bought */}
                <div className="py-8">
                    <Shimmer className="h-8 w-1/4 rounded" />
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        <Shimmer className="h-40 w-full rounded-md" />
                        <Shimmer className="h-40 w-full rounded-md" />
                        <Shimmer className="h-40 w-full rounded-md" />
                        <Shimmer className="h-40 w-full rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductDetailShimmer;