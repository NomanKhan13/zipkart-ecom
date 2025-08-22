import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const Hero = () => {
  return (
    <section className="bg-zinc-100">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-28 flex flex-col items-center text-center gap-6">
        
        {/* Headline */}
        <Typography
          variant="h1"
          weight="font-bold"
          className="text-3xl md:text-5xl leading-tight tracking-tight text-zinc-900"
        >
          Fresh Finds for You
        </Typography>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-zinc-600 max-w-2xl leading-relaxed">
          Explore the latest picks curated just for you! From trending fashion
          to lifestyle essentials, discover products that bring freshness and
          style to your everyday life.
        </p>

        {/* CTA Button */}
        <Link to="/collection/shop-fresh-finds">
          <Button
            btnText="Shop Fresh Finds"
            btnType="filled"
            className="mt-4 px-6 py-3 text-lg rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition bg-gradient-to-r from-[#3a6073] to-[#3a7bd5] text-white"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
