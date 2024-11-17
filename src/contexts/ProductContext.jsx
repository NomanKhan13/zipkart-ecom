import { createContext } from 'react';
import useProducts from '../hooks/useProducts';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const { allProducts, productsLoading, errorInProducts, setAllProducts } =
    useProducts();
  console.log({ allProducts, productsLoading, errorInProducts });

  const getProductById = (productId) => {
    console.log(allProducts, productId);
    return allProducts.find((product) => product.id == productId);
  };

  const updateProducts = (productId, newCartStatus) =>
    setAllProducts((prevState) =>
      prevState.map((product) =>
        product.id == productId
          ? { ...product, cartStatus: newCartStatus }
          : product
      )
    );

  return (
    <ProductContext.Provider
      value={{
        allProducts,
        productsLoading,
        errorInProducts,
        updateProducts,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
