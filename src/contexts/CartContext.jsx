import { createContext, useContext, useEffect, useState } from 'react';
import * as cartService from '../utils/cart';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: null });

  const { user } = useContext(AuthContext);
  const userId = user?.displayName || null;

  useEffect(() => {
    let unsubscribe = null;

    const cartInitializer = () => {
      const localCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart({items: localCart});

      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
    }

    if (!user) {
      cartInitializer();
    } else {
      unsubscribe = cartService.cartSync(userId, setCart);

      const localToServerCart = async () => {
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]');
        for (const item of localCart) {
          await cartService.cartAddItem(user.displayName, item);
        }
        localStorage.removeItem("cart");
      }

      localToServerCart();

    }
    return () => {
      typeof unsubscribe == "function" && unsubscribe();

    };

  }, [userId, user]);


  const addItemToCart = async (productInfo) => {
    if (!userId){
      const newCart = await cartService.cartAddItemLocal(productInfo);
      setCart({items: newCart});
    } else {
      await cartService.cartAddItem(userId, productInfo);
    }

  }

  const removeItemFromCart = async (productId) => {
    if (!userId){
      const newCart = await cartService.cartRemoveItemLocal(productId);
      setCart({items: newCart});
    } else {
      await cartService.cartRemoveItem(userId, productId);
    }
  }
  
  const updateItemOfCart = async (productId, newQuantity) => {
    if (!userId) {
      const newCart = await cartService.cartUpdateItemLocal(productId, newQuantity);
      setCart({items: newCart});
    } else {
      await cartService.cartUpdateItem(userId, productId, newQuantity);
    }
  }
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
