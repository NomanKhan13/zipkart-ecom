import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#e4ebf5] via-[#f0f4ff] to-[#fffffe] pt-16 pb-10">
      {/* Decorative Blob */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#ffd803] rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#bae8e8] rounded-full mix-blend-multiply filter blur-3xl opacity-25"></div>

      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand / Logo */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="text-2xl font-extrabold text-[#272343]">
           <Logo />
          </Link>
          <p className="text-sm text-[#2d334a] leading-relaxed">
            Discover fresh finds curated just for you. Fashion, lifestyle, and essentials — everything you need in one space.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="p-2 rounded-full bg-white shadow hover:scale-105 transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white shadow hover:scale-105 transition">
              <Instagram size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white shadow hover:scale-105 transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="p-2 rounded-full bg-white shadow hover:scale-105 transition">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-semibold text-[#272343] mb-4">Shop</h4>
          <ul className="flex flex-col gap-2 text-[#2d334a]">
            <li><Link to="/collection/fashion" className="hover:text-[#ffd803]">Fashion</Link></li>
            <li><Link to="/collection/electronics" className="hover:text-[#ffd803]">Electronics</Link></li>
            <li><Link to="/collection/house-holds" className="hover:text-[#ffd803]">Households</Link></li>
            <li><Link to="/collection/personal-care" className="hover:text-[#ffd803]">Personal Care</Link></li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="font-semibold text-[#272343] mb-4">Support</h4>
          <ul className="flex flex-col gap-2 text-[#2d334a]">
            <li><Link to="/help" className="hover:text-[#ffd803]">Help Center</Link></li>
            <li><Link to="/returns" className="hover:text-[#ffd803]">Returns & Refunds</Link></li>
            <li><Link to="/shipping" className="hover:text-[#ffd803]">Shipping Info</Link></li>
            <li><Link to="/contact" className="hover:text-[#ffd803]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-[#272343] mb-4">Get in Touch</h4>
          <ul className="flex flex-col gap-3 text-[#2d334a] text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@zipkart.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Anand, Gujarat, India
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t mt-12 pt-6 text-center text-sm text-[#2d334a]">
        © {new Date().getFullYear()} ZipKart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
