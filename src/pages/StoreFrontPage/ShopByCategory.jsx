
import { Link } from "react-router-dom";
import Typography from "../../components/Typography";
import { CATEGORY_STORE } from "../../utils/CONSTANTS";
import CategoryCard from "../../components/CategoryCard";

const ShopByCategory = () => {
  return (
    <section className="relative bg-[#f7f7f7] pt-[25rem] pb-60 -mt-[15rem]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
          <Typography
            variant="h2"
            weight="font-extrabold"
            className="text-3xl md:text-4xl text-[#272343]"
          >
            Shop by Category
          </Typography>
          
        </div>

        <div className="flex gap-6 overflow-x-auto scrollbar-hidden pb-4">
          {CATEGORY_STORE.map((category) => (
            <Link key={category.route} to={`/collection/${category.route}`}>
              <CategoryCard category={category} />
            </Link>
          ))}
        </div>

        <div className="flex sm:hidden mt-6">

        

        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
