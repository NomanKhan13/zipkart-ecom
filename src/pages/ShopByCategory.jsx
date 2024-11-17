import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-8 py-20">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <h2 className="text-slate-700 text-2xl font-medium">
            Shop by Category
          </h2>
          <button className="text-primary text-sm font-medium sm:p-2 hover:bg-gray-100 transition rounded-lg flex items-center gap-1">
            <span>Browse all categories</span>
            <MoveRight size={18} className="mt-1" />
          </button>
        </div>
        <div className="flex justify-between gap-4 overflow-x-auto scrollbar-hidden">
          {[
            { route: 'beauty', title: 'Beauty' },
            { route: 'home-decoration', title: 'Home' },
            { route: 'furniture', title: 'Furniture' },
            { route: 'groceries', title: 'Groceries' },
            { route: 'kitchen-accessories', title: 'Kitchen' },
          ].map((category) => (
            <Link
              key={category.route}
              to={`/collection/${category.route}`}
              className="block"
            >
              <div className="h-full border border-slate-400 flex-shrink-0 cursor-pointer relative bg-gray-500 bg-gradient-to-t from-gray-400 to-gray-100 rounded-lg w-56 py-20 px-8 hover:scale-95 transition">
                <img
                  src={`../../public/${category.route}.svg`}
                  className="h-full w-full"
                />
                <p className="text-gray-800 text-2xl absolute bottom-4 right-4 font-medium">
                  {category.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
