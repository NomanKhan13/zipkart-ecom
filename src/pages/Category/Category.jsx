import { X } from 'lucide-react';
import ProductsGrid from './ProductsGrid';
import { useParams } from 'react-router-dom';
import { CATEGORY_DATA, SORT_OPTIONS } from '../../utils/CONSTANTS';
import { useEffect } from 'react';
import Typography from '../../components/Typography';
import Navbar from '../../components/Navbar';

const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { category } = useParams();

  const {
    heading,
    subHeading,
    subCategories = [category],
  } = CATEGORY_DATA[category];

  return (
    <div className="flex justify-center relative z-10 overflow-hidden bg-gradient-to-br from-[#fffffe] via-[#f0f4ff] to-[#e4ebf5]">
      <Navbar />
      <div className="mt-16 w-full max-w-7xl px-4 md:px-8">
        {/* Head */}
        <div className="py-12 flex flex-col gap-2">
          <Typography variant="h3" weight="font-semibold" color="text-slate-900">{heading}</Typography>
          <p className="text-slate-500 leading-relaxed">{subHeading}</p>
        </div>

        {/* Sort & Filter */}
        {/* <div className="flex gap-4 items-center py-4">
          <select
            name="sort"
            id="sort"
            className="w-36 p-2 border rounded-md text-gray-700"
          >
            {SORT_OPTIONS.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            name="sort"
            id="sort"
            className="w-36 p-2 border rounded-md text-gray-700"
          >
            {SORT_OPTIONS.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </div> */}

        {/* Filters Applied */}
        {/* <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-8">
          <p className="text-gray-600 font-medium border-r pr-4 mr-4">
            Filters
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1 bg-white border rounded-full shadow-sm">
              <p className="text-gray-700">Fashion Trends</p>
              <X className="text-gray-500 cursor-pointer" />
            </div>
          </div>
        </div> */}

        {/* Products */}
        <ProductsGrid subCategories={subCategories} />
      </div>
    </div>
  );
};

export default Category;
