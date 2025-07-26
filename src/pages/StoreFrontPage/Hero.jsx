// import { Link } from 'react-router-dom';
// import Button from '../../components/Button';
// import Typography from '../../components/Typography';

// const Hero = () => {
//   return (
//     <div className="flex justify-center items-center font-mont px-4 py-40 md:px-8 bg-gradient-to-r from-[#3a6073] to-[#3a7bd5]">
//       <div className="w-full max-w-7xl flex flex-col sm:items-center gap-6 sm:text-center">
//         <Typography variant="h1" weight="font-semibold" color="text-white">Fresh Finds for You</Typography>
//         <p className="text-md md:text-lg text-gray-200 w-full max-w-2xl leading-relaxed">
//           The latest picks curated just for you! Explore new styles, fresh
//           releases, and trending items. These are bound to add a spark to your
//           wardrobe, home, and lifestyle.
//         </p>
//         <Link to="/collection/shop-fresh-finds">
//           <Button btnText="Shop Fresh Finds" btnType="filled" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-[#3a6073] to-[#3a7bd5] py-32 px-6 md:px-12 font-mont text-white">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <Typography variant="h1" weight="font-bold" color="text-white">
          Fresh Finds for You
        </Typography>
        <p className="text-lg md:text-xl leading-relaxed text-gray-100 max-w-3xl mx-auto">
          Discover trending picks curated just for you. Explore new styles,
          fresh releases, and standout items to elevate your wardrobe, home,
          and lifestyle.
        </p>
        <Link to="/collection/shop-fresh-finds">
          <Button
            btnText="Shop Fresh Finds →"
            btnType="filled"
            className="hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
