import { Link } from "react-router-dom";
import Button from "../../components/Button";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <h2 className="text-3xl font-semibold text-slate-800 mb-4">Your Cart is Empty</h2>
      <p className="text-lg text-slate-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
      <Link to="/">
        <Button btnText="Go to Shop" btnType="filled" className="w-full max-w-xs" />
      </Link>
    </div>
  );
};

export default EmptyCart;
