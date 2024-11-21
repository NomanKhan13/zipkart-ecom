import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Typography from '../../components/Typography';
import Button from '../../components/Button';
import { CATEGORY_STORE } from '../../utils/CONSTANTS';
import CategoryCard from '../../components/CategoryCard';

const ShopByCategory = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-4 md:px-8 py-20">
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          <Typography variant="h2" weight="font-medium" color="text-slate-900">Shop by Category</Typography>
          <Button btnText="Browse all categories" btnIcon={<MoveRight size={18} className="mt-1" />} className="hidden sm:flex p-2" />
        </div>
        <div className="flex justify-between pb-2 gap-4 overflow-x-auto scrollbar-hidden">
          {CATEGORY_STORE.map((category) => (
            <Link
              key={category.route}
              to={`/collection/${category.route}`}
              className="block"
            >
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>
        <Button btnText="Browse all categories" btnIcon={<MoveRight size={18} className="mt-1" />} className="flex mt-4 items-end sm:mt-0 sm:hidden" />
      </div>
    </div>
  );
};



export default ShopByCategory;
