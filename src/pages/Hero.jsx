import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Hero = () => {
  return (
    <div className="flex justify-center items-center font-mont px-4 py-40 md:px-8 bg-gradient-to-r from-[#3a6073] to-[#3a7bd5]">
      <div className="w-full max-w-7xl flex flex-col sm:items-center gap-6 sm:text-center">
        <h2 className="text-3xl md:text-6xl font-semibold text-white">
          Fresh Finds for You
        </h2>
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
