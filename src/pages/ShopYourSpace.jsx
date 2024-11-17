import { Link } from 'react-router-dom';
import ShopYourContainer from '../components/ShopYourContainer';
import Button from '../components/Button';

const ShopYourSpace = () => {
  return (
    <ShopYourContainer>
      <h2 className="text-2xl sm:text-3xl font-bold">Set Up Your Space</h2>
      <p className="lg:w-1/2 font-medium text-gray-200 sm:text-md sm:text-center leading-relaxed">
        Create a cozy, functional, and stylish space with our home essentials
        and decor items. Perfect for your home office, living room, or kitchen –
        make every corner uniquely yours.
      </p>

      <Link to="/collection/shop-your-space">
        <Button btnText="Shop Your Space" btnType="filled" />
      </Link>
    </ShopYourContainer>
  );
};

export default ShopYourSpace;
