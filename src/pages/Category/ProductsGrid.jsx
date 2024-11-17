import ProductCardShimmer from './ProductCardShimmer';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';
import { useEffect } from 'react';

const ProductsGrid = ({ subCategories, removeProduct }) => {
  const { allProducts, productsLoading } = useProducts(subCategories);
  console.log(subCategories);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {allProducts && !productsLoading ? (
        <>
          {allProducts.map(
            (product) =>
              product.id !== removeProduct && (
                <ProductCard key={product.id} product={product} />
              )
          )}
        </>
      ) : (
        // Render exactly 8 shimmers with fixed keys
        Array.from({ length: 8 }).map((_, idx) => (
          <ProductCardShimmer key={idx} />
        ))
      )}
    </div>
  );
};

export default ProductsGrid;
