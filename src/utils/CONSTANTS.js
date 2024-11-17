const getRandomElementOfArray = (inputArray) => {
  const randomIdx = Math.floor(Math.random() * inputArray.length);
  return inputArray[randomIdx];
};
// prettier-ignore
const mensFashion = ['mens-shirts', 'mens-shoes', 'mens-watches'];
// prettier-ignore
const womensFashion = [ 'womens-bags','womens-dresses','womens-jewellery','womens-shoes','womens-watches','tops',];
// prettier-ignore
const houseHolds = [ 'home-decoration', 'furniture','groceries','kitchen-accessories',];
// prettier-ignore
const personalCare = ['beauty', 'fragrances', 'skin-care', 'sunglasses'];
// prettier-ignore
const autoMobile = ['motorcycle', 'vehicle'];
// prettier-ignore
const electronics = ['laptops', 'mobile-accessories', 'smartphones', 'tablets'];
// prettier-ignore
const heroArray = [getRandomElementOfArray(mensFashion), getRandomElementOfArray(womensFashion), getRandomElementOfArray(houseHolds), getRandomElementOfArray(personalCare), getRandomElementOfArray(electronics), getRandomElementOfArray(autoMobile)];

export const CATEGORY_DATA = {
  fashion: {
    heading: 'Step Into Style with the Latest Fashion Trends',
    subHeading:
      'Unveil your perfect look with the newest in men’s and women’s clothing, shoes, and accessories.',
    subCategories: [...mensFashion, ...womensFashion],
  },
  electronics: {
    heading: 'Explore Cutting-Edge Electronics',
    subHeading:
      'Stay ahead of the curve with the latest gadgets, smartphones, laptops, and tech accessories.',
    subCategories: electronics,
  },
  ['house-holds']: {
    heading: 'Elevate Your Living Space',
    subHeading:
      'Transform your home with stylish decor, functional furniture, and essentials that make life easier.',
    subCategories: houseHolds,
  },
  ['personal-care']: {
    heading: 'Indulge in Beauty and Wellness',
    subHeading:
      'Pamper yourself with luxurious skincare, fragrances, and beauty products.',
    subCategories: personalCare,
  },
  ['shop-fresh-finds']: {
    heading: 'Discover Fresh Finds for You',
    subHeading:
      'Get your hands on the latest and most unique products, handpicked just for you.',
    subCategories: heroArray,
  },
  ['gadgets-gear']: {
    heading: 'Explore the Latest in Gadgets and Gear',
    subHeading:
      'Stay ahead of the tech curve with top-rated gadgets, electronics, and accessories for every need.',
    subCategories: [...autoMobile, ...electronics, 'sports-accessories'],
  },
  ['mens-collection']: {
    heading: "Unleash Your Style with Our Men's Collection",
    subHeading:
      "Browse through the best in men's fashion, from clothing to accessories, tailored to your taste.",
    subCategories: mensFashion,
  },
  ['womens-collection']: {
    heading: "Discover the Best in Women's Fashion",
    subHeading:
      "Explore our curated selection of women's clothing, accessories, and more to express your style.",
    subCategories: womensFashion,
  },
  ['shop-your-lifestyle']: {
    heading: 'Shop What Defines Your Lifestyle',
    subHeading:
      'Find the perfect products that match your passions, hobbies, and personality.',
    subCategories: [...mensFashion, ...womensFashion, ...personalCare],
  },
  ['shop-your-space']: {
    heading: 'Make Your Space Truly Yours',
    subHeading:
      'Find the perfect home and decor pieces to create a space that reflects your style.',
    subCategories: [...houseHolds, ...electronics, ...autoMobile],
  },
  beauty: {
    heading: 'Shop the Best by Category',
    subHeading:
      'Browse through diverse categories to uncover top-rated items tailored to your taste.',
  },
  fragrances: {
    heading: 'Discover the Essence of Luxury',
    subHeading: 'Explore our top fragrance picks to find your signature scent.',
  },
  furniture: {
    heading: 'Upgrade Your Home Space',
    subHeading:
      'Find stylish furniture pieces to make your living space feel complete.',
  },
  groceries: {
    heading: 'Essential Groceries at Your Fingertips',
    subHeading: 'Shop for everyday essentials with ease and convenience.',
  },
  ['home-decoration']: {
    heading: 'Beautify Your Home',
    subHeading:
      'Explore decor that transforms your living space into a stylish retreat.',
  },
  ['kitchen-accessories']: {
    heading: 'Equip Your Kitchen',
    subHeading:
      'From tools to gadgets, enhance your kitchen with our range of accessories.',
  },
  laptops: {
    heading: 'Stay Productive with the Best Laptops',
    subHeading:
      'Find laptops suited to your work, play, and everything in between.',
  },
  ['mens-shirts']: {
    heading: 'Top Picks for Men’s Shirts',
    subHeading:
      "Discover our stylish collection of men's shirts for every occasion.",
  },
  ['mens-shoes']: {
    heading: 'Step Up with Men’s Shoes',
    subHeading: 'Find footwear that balances comfort and style.',
  },
  ['mens-watches']: {
    heading: 'Elevate Your Look with Men’s Watches',
    subHeading: 'Choose from our collection of watches to match any style.',
  },
  ['mobile-accessories']: {
    heading: 'Get the Best Mobile Accessories',
    subHeading: 'Equip your phone with essential accessories.',
  },
  motorcycle: {
    heading: 'Gear Up with Motorcycle Accessories',
    subHeading: 'Shop accessories to enhance your motorcycle experience.',
  },
  ['skin-care']: {
    heading: 'Achieve Flawless Skin',
    subHeading: 'Browse our skin care collection for radiant, healthy skin.',
  },
  smartphones: {
    heading: 'Stay Connected with Smartphones',
    subHeading: 'Discover the latest and greatest in mobile technology.',
  },
  ['sports-accessories']: {
    heading: 'Power Up with Sports Accessories',
    subHeading: 'Gear up for your favorite sports with the right accessories.',
  },
  sunglasses: {
    heading: 'Complete Your Look with Sunglasses',
    subHeading: 'Find sunglasses that blend fashion with protection.',
  },
  tablets: {
    heading: 'Get the Best Tablets for All Purposes',
    subHeading: 'Browse tablets suited for work, play, and entertainment.',
  },
  tops: {
    heading: 'Discover Trendy Tops',
    subHeading: 'Browse our collection of women’s tops for every style.',
  },
  vehicle: {
    heading: 'Equip Your Vehicle',
    subHeading: 'Find accessories to keep your vehicle in top shape.',
  },
  ['womens-bags']: {
    heading: 'Accessorize with Women’s Bags',
    subHeading: 'Explore our selection of bags for every occasion.',
  },
  ['womens-dresses']: {
    heading: 'Step Out in Style with Dresses',
    subHeading: 'Find dresses for every occasion and style.',
  },
  ['womens-jewellery']: {
    heading: 'Sparkle with Women’s Jewellery',
    subHeading: 'Add elegance to your look with our jewelry collection.',
  },
  ['womens-shoes']: {
    heading: 'Shop Women’s Shoes',
    subHeading: 'Discover the perfect pair of shoes for any outfit.',
  },
  ['womens-watches']: {
    heading: 'Timeless Style with Women’s Watches',
    subHeading: 'Browse watches that add a finishing touch to your style.',
  },
};

const allcats = [
  'mens-shirts',
  'mens-shoes',
  'mens-watches',

  'womens-bags',
  'womens-dresses',
  'womens-jewellery',
  'womens-shoes',
  'womens-watches',
  'tops',

  'home-decoration',
  'furniture',
  'groceries',
  'kitchen-accessories',

  'beauty',
  'fragrances',
  'skin-care',
  'sunglasses',

  'motorcycle',
  'vehicle',

  'sports-accessories',
];
