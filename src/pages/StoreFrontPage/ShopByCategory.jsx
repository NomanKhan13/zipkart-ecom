import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Typography from "../../components/Typography";
import Button from "../../components/Button";
import { CATEGORY_STORE } from "../../utils/CONSTANTS";
import CategoryCard from "../../components/CategoryCard";

const ShopByCategory = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#fffffe] via-[#f0f4ff] to-[#e4ebf5] py-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <Typography
            variant="h2"
            weight="font-extrabold"
            className="text-3xl md:text-4xl text-[#272343]"
          >
            Shop by Category
          </Typography>
          <Button
            btnText="Browse all categories"
            btnIcon={<MoveRight size={18} />}
            className="hidden sm:flex px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-[#ffd803] text-[#272343]"
          />
        </div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hidden pb-4">
          {CATEGORY_STORE.map((category) => (
            <Link key={category.route} to={`/collection/${category.route}`}>
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>

        <div className="flex sm:hidden mt-6">
          <Button
            btnText="Browse all categories"
            btnIcon={<MoveRight size={18} />}
            className="px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all bg-[#ffd803] text-[#272343] w-full justify-center"
          />
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
