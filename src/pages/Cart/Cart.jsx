import { useContext, useEffect, useMemo, useState } from 'react';
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
  
  // const [quantity, setQuantity] = useState(cart?.item?.quantity || 1);
  const [quantity, setQuantity] = useState(1);
  const { currency, converter } = useContext(CurrencyContext);

  // only change when cart changes that's why memorized
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
    

  const cartItems = cart?.items?.map(item => <CartItem key={item.productId} item={item} currency={currency} converter={converter} />);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  if (!cart?.items) {
    return <CartShimmer />
  }

  
  if (cart?.items.length == 0) {
    return <EmptyCart />
  }

  return (
    <div className="flex flex-col justify-center py-12 px-4 md:px-8">
      <div className="w-full max-w-7xl flex flex-col items-center">

        <h2 className="text-3xl md:text-4xl mb-8 font-semibold text-center text-slate-800">
          Shopping Cart
        </h2>

        {cartItems}

        <div className='py-8 border-t border-slate-300 w-full max-w-2xl'>
          <div className='flex items-center justify-between mb-2'>
            <p className='font-semibold text-xl text-slate-900'>
              Subtotal
            </p>
            <p className='font-semibold text-2xl text-slate-900'>
              {currency}{(subTotal * converter).toLocaleString()}
            </p>
          </div>
          <div className='text-sm text-slate-500 mt-2'>
            Shipping and taxes will be calculated at checkout.
          </div>
        </div>

        <Link to="/checkout"><Button btnText="checkout" btnType="filled" className="w-full max-w-2xl" /></Link>
      </div>
      <div className='mt-20'>
        <h3 className='text-slate-900 text-xl py-4 font-medium'>You may also like...</h3>
        <ProductsGrid isForCart={true} subCategories={subCategories} removeProduct={removeProduct}/>
      </div>
    </div>
  );
};

export default Cart;
