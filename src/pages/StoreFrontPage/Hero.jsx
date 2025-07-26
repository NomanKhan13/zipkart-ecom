import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const Hero = () => {
  return (
    <div className="flex justify-center items-center font-mont px-4 py-40 md:px-8 bg-gradient-to-r from-[#3a6073] to-[#3a7bd5]">
      <div className="w-full max-w-7xl flex flex-col sm:items-center gap-6 sm:text-center">
        <Typography variant="h1" weight="font-semibold" color="text-white">Fresh Finds for You</Typography>
        <p className="text-md md:text-lg text-gray-200 w-full max-w-2xl leading-relaxed">
          The latest picks curated just for you! Explore new styles, fresh
          releases, and trending items. These are bound to add a spark to your
          wardrobe, home, and lifestyle.
        </p>
        <Link to="/collection/shop-fresh-finds">
          <Button btnText="Shop Fresh Finds" btnType="filled" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
