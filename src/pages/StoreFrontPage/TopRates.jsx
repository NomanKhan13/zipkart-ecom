import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import Typography from "../../components/Typography";
import { useEffect, useState } from "react";
import ProductCard from "../Category/ProductCard";

const TopRated = () => {
  const [topProds, setTopProds] = useState([]);

  useEffect(() => {
    async function fetchTopProducts() {
      const res = await fetch(
        "https://dummyjson.com/products?limit=8&sortBy=rating&order=desc"
      );
      const data = await res.json();
      setTopProds(data.products);
    }
    fetchTopProducts();
  }, []);

  return (
    <section className="bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        {/* Heading + CTA */}
        <div className="flex items-center justify-between mb-8">
          <Typography
            variant="h2"
            weight="font-semibold"
            className="text-2xl md:text-3xl text-gray-900"
          >
            Top Rated Products
          </Typography>

          {/* <Link
            to="/top-rated"
            className="flex items-center gap-1 text-primary font-medium hover:underline"
          >
            View All
            <MoveRight size={18} />
          </Link> */}
        </div>

        {/* Products - scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topProds.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="min-w-[240px] sm:min-w-0"
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRated;
