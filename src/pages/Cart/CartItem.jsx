import { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import { Heart, Trash } from 'lucide-react';
import clsx from 'clsx';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({ item, currency, converter }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const {removeItemFromCart, updateItemOfCart} = useContext(CartContext);

  
  useEffect(() => {
    console.log("run");
    updateItemOfCart(item.productId, quantity);
  }, [quantity]);

  return (
    <div className="w-full max-w-2xl border-t border-slate-300 p-4 mb-4 shadow shadow-primary/15 rounded">
      <div className="flex gap-4">
        {/* Product Image */}
        <div
          className={clsx(
            "h-36 w-36 border border-slate-400 border shadow rounded",
            imageLoaded
              ? "bg-gray-gradient"
              : "bg-cover bg-center bg-[url('https://via.placeholder.com/150')]"
          )}
        >
          <img
            src={item.thumbnail || "https://via.placeholder.com/150"}
            className={clsx("h-full w-full", imageLoaded ? "opacity-100" : "opacity-0")}
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl">{item.title}</h3>
              <p className="text-slate-400 text-sm">Brand: Prestige</p>
            </div>
            <p className="text-lg font-medium">
              {currency}
              {(item.price * converter).toLocaleString()}
            </p>
          </div>

          {/* Quantity and Remove Button */}
          <div className="flex items-end justify-between">
            <div className="px-2 py-1 border border-slate-500 rounded-full flex items-center justify-center">
              <Button
                btnText="-"
                btnType="ghost"
                className="p-1 text-lg w-8"
                handleClick={() => setQuantity((prevQuantity) => (prevQuantity <= 1 ? 1 : prevQuantity - 1))}
              />
              <p className="w-8 text-center">{quantity}</p>
              <Button
                btnText="+"
                btnType="ghost"
                className="p-1 text-lg w-8"
                handleClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}
              />
            </div>
            <Button btnText="Remove" btnType="ghost" btnIcon={<Trash  size={15}/>} className="p-2" handleClick={() => removeItemFromCart(item.productId)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
