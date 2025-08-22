import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Typography from "./Typography";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Top: Brand + Nav */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-3 md:w-1/3">
            <Typography variant="h4" weight="font-bold" color="text-white">
              ShopSage
            </Typography>
            <p className="text-sm leading-relaxed">
              Curated collections to elevate your lifestyle. Thoughtfully designed for beauty, utility, and everyday ease.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div>
              <h4 className="text-sm font-semibold text-zinc-200 mb-3">
                Shop
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/collections" className="hover:text-white">All Collections</Link></li>
                <li><Link to="/collection/shop-your-space" className="hover:text-white">Shop Your Space</Link></li>
                <li><Link to="/collection/shop-your-lifestyle" className="hover:text-white">Shop Your Life</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-zinc-200 mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-8" />

        {/* Bottom: Social + Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
            <a href="#" className="hover:text-white"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white"><Twitter size={18} /></a>
          </div>
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} ShopSage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
