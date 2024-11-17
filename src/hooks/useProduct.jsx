import { useEffect, useState } from 'react';
import * as productService from '../utils/products';

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const data = await productService.getProduct(productId);
        setProduct({ ...data, isInCart: false });
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  return { product, isLoading, error };
};

export default useProduct;
