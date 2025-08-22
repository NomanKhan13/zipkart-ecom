import { LogOut, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import Logo from "./Logo";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import { CurrencyContext } from "../contexts/CurrencyContext";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
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
    <header className="relative">
      {/* --- Top Utility Bar --- */}
      <div className="bg-gradient-to-r from-[#2e3b4e] to-[#0d1b26]">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-between text-white text-sm">
          {/* Currency Selector */}
          <select
            name="currency"
            id="currency"
            defaultValue={currency}
            className="bg-transparent font-medium rounded-md border border-white/30 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-white"
            onChange={(e) => handleCurrencyChange(e.target.value)}
          >
            <option value="₹" className="text-zinc-800">INR</option>
            <option value="CA$" className="text-zinc-800">CAD</option>
            <option value="€" className="text-zinc-800">EUR</option>
            <option value="$" className="text-zinc-800">USD</option>
          </select>

          {/* User Greeting / Auth Links */}
          <div className="flex items-center gap-4">
            {user?.displayName ? (
              <p className="font-medium">
                Welcome, <span className="font-semibold">{user.displayName}</span>
              </p>
            ) : (
              <>
                <Link to="/sign-in" className="hover:underline">Sign in</Link>
                <Link to="/sign-up" className="hover:underline">Create account</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* --- Main Navbar --- */}
      <nav className="bg-white border-b border-zinc-200">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
          {/* Mobile Menu + Search */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setOpenMobileMenu(true)}
              className="p-2 rounded-lg hover:bg-zinc-100"
            >
              <Menu />
            </button>
            <Link to="/search" className="p-2 rounded-lg hover:bg-zinc-100">
              <Search />
            </Link>
          </div>

          {/* Logo */}
          <Link to="/store" className="text-2xl font-bold text-accent">
            <Logo size="text-2xl lg:text-3xl" />
          </Link>

          {/* Nav Links (Desktop) */}
          <ul className="hidden lg:flex gap-6 font-medium text-zinc-700">
            <li><Link className="hover:text-primary" to="/collection/fashion">Fashion</Link></li>
            <li><Link className="hover:text-primary" to="/collection/electronics">Electronics</Link></li>
            <li><Link className="hover:text-primary" to="/collection/house-holds">Households</Link></li>
            <li><Link className="hover:text-primary" to="/collection/personal-care">Personal Care</Link></li>
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search (Desktop) */}
            <Link to="/search" className="hidden lg:flex p-2 rounded-full hover:bg-zinc-100">
              <Search />
            </Link>

            {/* Profile */}
            {user && (
              <div className="relative">
                <button
                  className="p-2 rounded-full hover:bg-zinc-100"
                  onClick={() => setIsModalOpen((prev) => !prev)}
                >
                  <UserRound />
                </button>
                {isModalOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                    <button
                      onClick={handleLogOut}
                      className="flex items-center gap-2 w-full px-3 py-2 text-left text-sm hover:bg-zinc-100"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="p-2 rounded-full hover:bg-zinc-100 relative"
            >
              <ShoppingCart />
              {/* Example badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5">
                2
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {openMobileMenu && (
        <div className="fixed inset-0 bg-black/40 z-20">
          <div className="w-64 bg-white h-full shadow-lg p-4">
            <MobileMenu setOpenMobileMenu={setOpenMobileMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
