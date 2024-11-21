import ProductCardShimmer from './ProductCardShimmer';
import useProducts from '../../hooks/useProducts';
import ProductCard from './ProductCard';

const ProductsGrid = ({ subCategories, removeProduct = [], isForCart = false }) => {

  const { allProducts, productsLoading } = useProducts(subCategories);
  console.log("I am in ProductsGrid", subCategories,removeProduct);

  if (productsLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <ProductCardShimmer key={`shimmer-${idx}`} />
        ))}
      </div>
    )
  }

  const filteredProducts = removeProduct.length != 0 ? allProducts?.filter(
    (product) => !removeProduct?.includes(product.id)
  ) : allProducts;
  
  if (filteredProducts?.length >= 8 && isForCart) {
    filteredProducts.splice(9);
  }


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <>
        {filteredProducts?.map((product) => (<ProductCard key={product.id} product={product} />))}
      </>

    </div>
  );
};

export default ProductsGrid;
