import { useEffect, useState } from 'react';
import * as productService from '../utils/products';

const useProducts = (subCategories) => {
  const [allProducts, setAllProducts] = useState(null);
  const [productsLoading, setProductsLoading] = useState(false);
  const [errorInProducts, setErrorInProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setErrorInProducts(null);
      setAllProducts(null);
      setProductsLoading(true);
      try {
        const fetchedProducts = await productService.getProductsByCategory(
          subCategories
        );
        console.log(fetchProducts);
        // const updatedProducts = fetchedProducts.map((product) => ({
        //   ...product,
        //   cartStatus: { isInCart: false, quantity: 0 },
        // }));
        setAllProducts(fetchedProducts);
      } catch (error) {
        setErrorInProducts(error.message);
      } finally {
        setProductsLoading(false);
      }
    };
    fetchProducts();
  }, [subCategories]);

  return { allProducts, productsLoading, errorInProducts, setAllProducts };
};

export default useProducts;
