import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const ShopYourSpace = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-8">
        <div className="bg-gradient-to-r from-zinc-100 to-zinc-200 rounded-2xl shadow-sm flex flex-col gap-6 justify-center items-center text-center sm:text-left py-20 sm:py-28 px-6">
          <Typography 
            variant="h2" 
            weight="font-semibold" 
            color="text-zinc-900"
          >
            Set Up Your Space
          </Typography>

          <p className="lg:w-2/3 text-zinc-600 text-base sm:text-lg leading-relaxed">
            Create a cozy, functional, and stylish space with our home essentials
            and decor items. Perfect for your home office, living room, or kitchen –
            make every corner uniquely yours.
          </p>

          <Link to="/collection/shop-your-space">
            <Button
            btnText="Shop Your Space"
            btnType="filled"
            className="mt-4 px-6 py-3 text-lg rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition bg-gradient-to-r from-[#3a6073] to-[#3a7bd5] text-white"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopYourSpace;
