import { LogIn, LogOut, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import Logo from "./Logo";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { CurrencyContext } from "../contexts/CurrencyContext";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const { handleCurrencyChange, currency } = useContext(CurrencyContext);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <nav className="w-full max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between 
        bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl shadow-md mt-4">

        {/* Mobile Menu + Search */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setOpenMobileMenu(true)}
            className="p-2 rounded-lg hover:bg-zinc-100 transition"
          >
            <Menu />
          </button>
          <Link to="/search" className="p-2 rounded-lg hover:bg-zinc-100 transition">
            <Search />
          </Link>
        </div>

        {/* Logo */}
        <Link to="/store" className="text-2xl font-bold text-[#272343] hover:opacity-90 transition">
          <Logo size="text-2xl lg:text-3xl" />
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="hidden lg:flex gap-8 font-medium text-[#2d334a]">
          <li className="text-[#272343] hover:text-[#ffd803]"><Link className="transition" to="/collection/fashion">Fashion</Link></li>
          <li className="text-[#272343] hover:text-[#ffd803]"><Link className="transition" to="/collection/electronics">Electronics</Link></li>
          <li className="text-[#272343] hover:text-[#ffd803]"><Link className="transition" to="/collection/house-holds">Households</Link></li>
          <li className="text-[#272343] hover:text-[#ffd803]"><Link className="transition" to="/collection/personal-care">Personal Care</Link></li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Search (Desktop) */}
          <Link to="/search" className="hidden lg:flex p-2 rounded-full hover:bg-zinc-100 transition">
            <Search />
          </Link>

         


          {/* Profile */}
          <div className="relative">
            <button
              className="p-2 rounded-full hover:bg-zinc-100 transition"
              onClick={() => setIsModalOpen((prev) => !prev)}
            >
              <UserRound />
            </button>
            {isModalOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-xl shadow-lg z-10">
                <button
                  onClick={user ? handleLogOut : navigate("/sign-in")}
                  className="flex items-center gap-2 w-full px-3 py-2 text-left text-sm hover:bg-zinc-100"
                >
                  {user ? <LogOut size={16} /> : <LogIn />}
                  
                  <span>{user ? "Sign Out" : "Sign in"}</span>
                </button>
              </div>
            )}
          </div>


          {/* Cart */}
          <Link
            to="/cart"
            className="p-2 rounded-full hover:bg-zinc-100 transition relative"
          >
            <ShoppingCart />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 shadow">
              2
            </span>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {openMobileMenu && (
        <div className="fixed inset-0 bg-black/40 z-30">
          <div className="w-64 bg-white h-full shadow-lg p-4">
            <MobileMenu setOpenMobileMenu={setOpenMobileMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
