import { Link } from 'react-router-dom';
import ShopYourContainer from '../../components/ShopYourContainer';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const ShopYourLife = () => {
  return (
    <ShopYourContainer>
      <Typography variant="h2" weight="font-bold" color="text-white">Elevate Your Daily Routine</Typography>
      <p className="lg:w-1/2 font-medium text-gray-200 sm:text-md sm:text-center leading-relaxed">
        Discover products designed to bring ease and enjoyment to your everyday.
        From skincare essentials to productivity tools, these items make
        self-care and efficiency a breeze.
      </p>

      <Link to="/collection/shop-your-lifestyle">
        <Button btnText="Shop Lifestyle Essentials" btnType="filled" />
      </Link>
    </ShopYourContainer>
  );
};

export default ShopYourLife;

// background: #3a7bd5;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #3a6073, #3a7bd5);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #3a6073, #3a7bd5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
