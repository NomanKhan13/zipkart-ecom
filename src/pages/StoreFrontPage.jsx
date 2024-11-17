import Hero from './Hero';
import ShopByCategory from './ShopByCategory';
import ShopYourSpace from './ShopYourSpace';
import ShopByCollection from './ShopByCollection';
import ShopYourLife from './ShopYourLife';

const StoreFrontPage = () => {
  return (
    <div className="bg-[#f5f5f0]">
      <Hero />
      <ShopByCategory />
      <ShopYourSpace />
      <ShopByCollection />
      <ShopYourLife />
    </div>
  );
};

export default StoreFrontPage;
