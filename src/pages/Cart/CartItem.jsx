import { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button';
import { Trash } from 'lucide-react';
import clsx from 'clsx';
import { CartContext } from '../../contexts/CartContext';

const CartItem = ({ item, currency, converter }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const { removeItemFromCart, updateItemOfCart } = useContext(CartContext);

  useEffect(() => {
    updateItemOfCart(item.productId, quantity);
  }, [quantity]);

  return (
    <div className="w-full border border-zinc-200 rounded-2xl shadow-sm p-4 flex gap-4 bg-white">
      
      {/* Image */}
      <div
        className={clsx(
          "h-28 w-28 rounded-xl overflow-hidden border border-zinc-300 shadow-sm flex-shrink-0",
          imageLoaded ? "bg-zinc-100" : "bg-[url('https://via.placeholder.com/150')] bg-cover bg-center"
        )}
      >
        <img
          src={item.thumbnail || "https://via.placeholder.com/150"}
          alt={item.title}
          className={clsx("h-full w-full object-cover transition-opacity", imageLoaded ? "opacity-100" : "opacity-0")}
          onLoad={() => setImageLoaded(true)}
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div>
          <h3 className="truncate text-base font-semibold w-40 sm:w-64">{item.title}</h3>
            {/* <h3 className="text-lg font-medium text-zinc-900">{item.title}</h3> */}
            <p className="text-sm text-zinc-500">Brand: {item.brand}</p>
          </div>
          <p className="text-lg font-semibold text-zinc-900">
            {currency}{(item.price * converter).toLocaleString()}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-4">
          {/* Quantity Control */}
          <div className="flex items-center gap-2 border border-zinc-300 rounded-full px-1 sm:px-3 py-1">
            <Button
              btnText="-"
              btnType="ghost"
              className="text-lg w-6"
              handleClick={() => setQuantity(prev => (prev <= 1 ? 1 : prev - 1))}
            />
            <span className="w-6 text-center">{quantity}</span>
            <Button
              btnText="+"
              btnType="ghost"
              className="text-lg w-6"
              handleClick={() => setQuantity(prev => prev + 1)}
            />
          </div>

          {/* Remove Button */}
          <Button
            btnText="Remove"
            btnType="ghost"
            btnIcon={<Trash size={15} />}
            className="px-3 py-1"
            handleClick={() => removeItemFromCart(item.productId)}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
