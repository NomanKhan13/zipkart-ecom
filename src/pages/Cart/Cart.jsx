import { useContext, useEffect, useMemo } from 'react';
import { CartContext } from '../../contexts/CartContext';
import CartItem from './CartItem';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import Button from '../../components/Button';
import ProductsGrid from '../Category/ProductsGrid';
import CartShimmer from './CartShimmer';
import EmptyCart from './EmptyCart';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart } = useContext(CartContext);
  const { currency, converter } = useContext(CurrencyContext);

  const subTotal = useMemo(() => {
    return cart?.items?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
  }, [cart?.items]);

  const subCategories = useMemo(() => {
    const allCategories = new Set(cart?.items?.map(item => item.category));
    return [...allCategories];
  }, [cart?.items]);

  const removeProduct = useMemo(() => {
    return cart?.items?.map(item => item.productId) || [];
  }, [cart?.items]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!cart?.items) return <CartShimmer />;
  if (cart.items.length === 0) return <EmptyCart />;

  return (
    <div className="flex flex-col justify-center py-12 px-4 md:px-8">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-zinc-900 mb-10">
          Shopping Cart
        </h2>

        {/* Items */}
        <div className="space-y-6">
          {cart.items.map(item => (
            <CartItem 
              key={item.productId} 
              item={item} 
              currency={currency} 
              converter={converter} 
            />
          ))}
        </div>

        {/* Subtotal & Checkout */}
        <div className="mt-10 border-t border-zinc-300 pt-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-xl text-zinc-900">Subtotal</p>
            <p className="font-semibold text-2xl text-zinc-900">
              {currency}{(subTotal * converter).toLocaleString()}
            </p>
          </div>
          <p className="text-sm text-zinc-500 mb-6">
            Shipping and taxes will be calculated at checkout.
          </p>

          <Link to="/checkout">
            <Button 
              btnText="Proceed to Checkout" 
              btnType="filled" 
              className="w-full max-w-2xl" 
            />
          </Link>
        </div>
      </div>

      {/* Recommendations */}
      <div className="mt-20 max-w-7xl mx-auto">
        <h3 className="text-zinc-900 text-xl md:text-2xl font-medium mb-6">
          You may also like
        </h3>
        <ProductsGrid 
          isForCart={true} 
          subCategories={subCategories} 
          removeProduct={removeProduct} 
        />
      </div>
    </div>
  );
};

export default Cart;
