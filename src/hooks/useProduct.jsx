import { useEffect, useState } from 'react';
import * as productService from '../utils/products';

const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const isLoading = status === 'loading';
  const isSuccess = status === 'loaded';
  const isError = status === 'error';

  useEffect(() => {
    const fetchProductById = async () => {
      setStatus('loading');
      setError(null);
      setProduct(null);
      try {
        const data = await productService.getProduct(productId);
        setProduct(data);
      } catch (error) {
        setStatus('error');
        setError(error.message);
      } finally {
        setStatus('loaded');
      }
    };
    fetchProductById();
  }, [productId]);

  return {isLoading, isError, error, isSuccess, product};
};

export default useProduct;
