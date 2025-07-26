import { LogOut, Menu, Search, ShoppingCart, UserRound } from 'lucide-react';
import Logo from './Logo';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';
import MobileMenu from './MobileMenu';
import clsx from 'clsx';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const { handleCurrencyChange, currency } = useContext(CurrencyContext);
  // console.log(handleCurrencyChange)

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
  <header className="bg-gradient-to-r from-[#2e3b4e] to-[#0d1b26] text-white font-mont">
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">
      {/* Left: Logo + Nav */}
      <div className="flex items-center gap-6">
        {/* Mobile menu button */}
        <button onClick={() => setOpenMobileMenu(true)} className="lg:hidden">
          <Menu />
        </button>

        {/* Logo */}
        <Link to="/store" className="text-xl md:text-2xl font-bold text-accent">
          <Logo size="text-xl md:text-2xl" />
        </Link>

        {/* Nav links */}
        <ul className="hidden lg:flex gap-4 text-sm md:text-base">
          <li>
            <Link to="/collection/fashion" className="hover:text-accent">
              Fashion
            </Link>
          </li>
          <li>
            <Link to="/collection/electronics" className="hover:text-accent">
              Electronics
            </Link>
          </li>
          <li>
            <Link to="/collection/house-holds" className="hover:text-accent">
              Households
            </Link>
          </li>
          <li>
            <Link to="/collection/personal-care" className="hover:text-accent">
              Personal Care
            </Link>
          </li>
        </ul>
      </div>

      {/* Right: Search, Cart, Auth/Profile */}
      <div className="flex items-center gap-4">
        {/* Currency dropdown */}
        <select
          name="currency"
          defaultValue={currency}
          className="bg-transparent border border-white rounded px-2 py-1 text-sm outline-none hover:border-accent"
          onChange={(e) => handleCurrencyChange(e.target.value)}
        >
          <option value="₹" className="text-black">
            INR
          </option>
          <option value="CA$" className="text-black">
            CND
          </option>
          <option value="€" className="text-black">
            EUR
          </option>
          <option value="$" className="text-black">
            USD
          </option>
        </select>

        {/* Search Icon */}
        <Link to="/search">
          <button className="hover:bg-white/10 p-2 rounded-full transition">
            <Search />
          </button>
        </Link>

        {/* Cart Icon */}
        <Link to="/cart">
          <button className="hover:bg-white/10 p-2 rounded-full transition">
            <ShoppingCart />
          </button>
        </Link>

        {/* Auth / Profile */}
        {user ? (
          <div className="relative">
            <button
              onClick={() => setIsModalOpen((prev) => !prev)}
              className="hover:bg-white/10 p-2 rounded-full transition"
            >
              <UserRound />
            </button>

            {/* Dropdown */}
            {isModalOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white text-gray-800 rounded shadow-lg py-2 z-20">
                <button
                  onClick={handleLogOut}
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                >
                  <LogOut size={16} />
                  <span className="text-sm font-semibold">Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/sign-in" className="text-sm hover:underline">
              Sign in
            </Link>
            <Link to="/sign-up" className="text-sm hover:underline">
              Create Account
            </Link>
          </>
        )}
      </div>
    </div>

    {/* Mobile menu panel (currently commented) */}
    {/* ... MobileMenu as before ... */}
  </header>
);
};

export default Navbar;
