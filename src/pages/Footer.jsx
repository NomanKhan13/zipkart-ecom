const FOOTER_ITEMS = [
  'Beauty',
  'Fragrances',
  'Furniture',
  'Groceries',
  'Home decoration',
  'Kitchen Accessories',
  'Laptops',
  'Mens Shirts',
  'Mens Shoes',
  'mens Watches',
  'Mobile Accessories',
  'Motorcycle',
  'Skin care',
  'Smartphones',
  'Sports Accessories',
  'Sunglasses',
  'Tablets',
  'Tops',
  'Vehicle',
  'Womens Bags',
  'Womens Dresses',
  'Womens Jewellery',
  'Womens Shoes',
  'Womens Watches',
];

const Footer = () => {
  return (
    <div className="flex justify-center bg-gradient-to-r from-[#2e3b4e] to-[#0d1b26] py-16 mt-16">
      <div className="w-full max-w-7xl px-4 md:px-8 mt-12 flex gap-8 flex-col xl:flex-row">
        {/* Grid layout for footer items */}
        <div className="flex-1 grid gap-4 grid-cols-2 md:grid-cols-4 text-gray-300">
          {FOOTER_ITEMS.map((item) => (
            <p key={item} className="p-2">
              {item}
            </p>
          ))}
        </div>

        {/* Newsletter signup section */}
        <div className="flex flex-col gap-4">
          <p className="text-white text-lg">Sign up for our newsletter</p>
          <p className="text-gray-200">
            The latest deals and savings, sent to your inbox weekly.
          </p>
          <div className="flex gap-4 mt-3">
            <input
              type="email"
              placeholder="jane@gmail.com"
              className="py-2 px-3 rounded-md xl:flex-1"
            />
            <button className="bg-[#74b5ff] px-6 py-3 rounded-md text-slate-800 font-medium">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
