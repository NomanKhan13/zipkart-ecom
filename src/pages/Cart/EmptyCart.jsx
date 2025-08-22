import { Link } from "react-router-dom";
import Button from "../../components/Button";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-3xl font-semibold text-zinc-900 mb-4">
        Your Cart is Empty
      </h2>
      <p className="text-lg text-zinc-500 mb-6 text-center max-w-md">
        Looks like you haven’t added anything yet. Start exploring our products!
      </p>
      <Link to="/">
        <Button 
          btnText="Browse Products" 
          btnType="filled" 
          className="w-full max-w-xs" 
        />
      </Link>
    </div>
  );
};

export default EmptyCart;
