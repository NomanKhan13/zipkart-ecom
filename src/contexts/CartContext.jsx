import { createContext, useEffect, useState } from 'react';
import * as cartService from '../utils/cart';
import { firestoreDB } from '../firebase';

export const CartContext = createContext();

const CartProvider = ({ children, userId }) => {
  const [cart, setCart] = useState({ items: null });
  console.log(cart);
  useEffect(() => {
    const unsubscribe = () => cartService.cartSync(userId, setCart);
    return () => unsubscribe();
  }, [firestoreDB]);

  const addItemToCart = async (productInfo) =>
    await cartService.cartAddItem(userId, productInfo);
  const removeItemFromCart = async (productInfo) =>
    await cartService.cartRemoveItem(userId, productInfo);
  const updateItemOfCart = async (productInfo, newQuantity) =>
    await cartService.cartUpdateItem(userId, productInfo, newQuantity);
  const getItemsOfCart = async () => await cartService.cartGetItems(userId);
  const clearItemsOfCart = async () => await cartService.cartClear(userId);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        updateItemOfCart,
        getItemsOfCart,
        clearItemsOfCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
