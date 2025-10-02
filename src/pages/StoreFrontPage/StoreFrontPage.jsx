import Hero from './Hero';
import ShopByCategory from './ShopByCategory';
import ShopYourSpace from './ShopYourSpace';
import ShopByCollection from './ShopByCollection';
import ShopYourLife from './ShopYourLife';
import TopRated from './TopRates';

const StoreFrontPage = () => {
  return (
    <>
      <Hero />
      <TopRated/>
      <ShopYourSpace />
      <ShopByCategory />
      <ShopYourLife />
      <ShopByCollection />
    </>
  );
};

export default StoreFrontPage;
