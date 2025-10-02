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
    <section className="relative bg-[#f7f7f7] -mt-[20vh] py-[15rem]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <Typography
          variant="h2"
          weight="font-extrabold"
          color="text-[#272343]"
        >
          Top Rated Products
        </Typography>

        <div className="flex gap-6 overflow-x-auto scrollbar-hidden pb-4">
          {topProds.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="min-w-80">
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRated;
