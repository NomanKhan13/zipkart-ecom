import { MoveRight } from 'lucide-react';
import { title } from 'process';
import { Link } from 'react-router-dom';

const COLLECTION = [
  {
    title: 'Gadgets & Gear',
    description:
      'Latest tech gadgets and accessories to keep you connected and entertained.',
    subcategories: ['smartphones', 'tablets', 'mobile-accessories', 'laptops'],
    img: '../../gadgets-collection.svg',
    route: 'gadgets-gear',
  },
  {
    title: 'Men’s Essentials',
    description:
      'Top picks in men’s fashion, shoes, and accessories for a complete look.',
    subcategories: ['mens-shirts', 'mens-shoes', 'mens-watches', 'sunglasses'],
    img: '../../mens-collection.svg',
    route: 'mens-collection',
  },
  {
    title: 'Women’s Must-Haves',
    description:
      'Stylish essentials from dresses to jewelry that every woman will love.',
    subcategories: [
      'womens-dresses',
      'womens-bags',
      'womens-shoes',
      'womens-watches',
      'womens-jewellery',
    ],
    img: '../../women-collection.svg',
    route: 'womens-collection',
  },
  {
    title: 'Home & Decor',
    description:
      'Home furnishings and decor items to enhance every room in style.',
    subcategories: ['furniture', 'home-decoration', 'kitchen-accessories'],
    img: '../../home-decor-collection.svg',
    route: 'house-holds',
  },
];

const ShopByCollection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-8 py-20">
        <div className="flex flex-col sm:items-center mb-8">
          <h2 className="text-slate-700 text-2xl font-medium">
            Shop by Collection
          </h2>
          <p className="text-slate-400 sm:text-center">
            Each season, we collaborate with world-class designers to create a
            collection inspired by the natural world.
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-stretch lg:flex-row gap-4">
          {COLLECTION.map((collection) => (
            <div
              key={collection.route}
              className="flex-1 cursor-pointer flex flex-col gap-2 hover:scale-95 transition w-full sm:w-4/6"
            >
              <Link to={`/collection/${collection.route}`}>
                <div className="bg-gradient-to-t from-gray-400 to-gray-100 rounded-lg py-20 px-8 h-96 border border-slate-400">
                  <img src={collection.img} className="h-full w-full" />
                </div>
                <p className="text-gray-800 text-lg lg:text-xl lg:h-12">
                  {collection.title}
                </p>
                <p className="text-slate-400 text-sm">
                  {collection.description}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCollection;
