import { Link } from 'react-router-dom';
import ShopYourContainer from '../../components/ShopYourContainer';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const ShopYourSpace = () => {
  return (
    <ShopYourContainer>
      <Typography variant="h2" weight="font-bold" color="text-white">Set Up Your Space</Typography>
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
