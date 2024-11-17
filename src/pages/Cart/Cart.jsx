import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import Button from '../../components/Button';
import { Heart } from 'lucide-react';

const Cart = () => {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <div className="flex justify-center py-12 px-4 md:px-8">
      <div className="w-full max-w-7xl">
        <h2 className="text-2xl md:text-3xl mb-12">Shopping Cart</h2>
        <div className="w-full max-w-[3rem] border-t p-4">
          <div className="flex gap-4">
            <div className="h-40 bg-background border shadow-md rounded-md">
              <img
                src="https://cdn.dummyjson.com/products/images/kitchen-accessories/Electric%20Stove/1.png"
                className="h-full w-full"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between">
                <div>
                  <h3>Artwork Tee</h3>
                  <p>Brand: Prestige</p>
                </div>
                <p>$32.00</p>
              </div>
              <div className="flex items-center justify-between">
                <p>qty: 1</p>
                <Button btnText="Remove" btnType="ghost" className="py-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
