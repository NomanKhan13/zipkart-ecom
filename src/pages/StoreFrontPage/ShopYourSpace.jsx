import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import { motion } from "motion/react";
import Navbar from "../../components/Navbar";

const ShopYourSpace = () => {
  return (
    <section
      className="relative z-10 overflow-hidden bg-gradient-to-br from-[#fffffe] via-[#f0f4ff] to-[#e4ebf5] z-10 -mt-[6rem] -skew-y-6"
      
    >

      {/* Decorative Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#ffd803] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-[#bae8e8] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-40 pb-32 flex flex-col items-center text-center gap-8 skew-y-6">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography variant="h1" weight="font-extrabold" className="">
            Shop Your Space
          </Typography>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-base md:text-lg text-[#2d334a] max-w-2xl leading-relaxed"
        >
          Redefine your living space with unique furniture and curated decor.
          Handpicked collections designed to make every corner feel like home.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link to="/collection/shop-your-space">
            <Button
              btnText="Explore Collections"
              btnType="filled"
              className="mt-4 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-[#ffd803] text-[#272343]"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopYourSpace;
