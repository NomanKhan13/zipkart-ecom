import { LogOut, Menu, Search, ShoppingCart, UserRound } from 'lucide-react';
import Logo from './Logo';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { CurrencyContext } from '../contexts/CurrencyContext';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { handleCurrencyChange } = useContext(CurrencyContext);

  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    <header>
      <div className="bg-gradient-to-r from-[#2e3b4e] to-[#0d1b26] flex justify-center">
        <div className="w-full max-w-7xl px-4 md:px-8 py-2 flex items-center justify-between">
          <select
            name="currency"
            id="currency"
            className="text-white font-medium bg-primary outline-none rounded focus:ring-1 focus:ring-white"
            onChange={(e) => handleCurrencyChange(e.target.value)}
          >
            <option value="₹" className="bg-white text-gray-800">
              INR
            </option>
            <option value="CA$" className="bg-white text-gray-800">
              CND
            </option>
            <option value="€" className="bg-white text-gray-800">
              EUR
            </option>
            <option value="$" className="bg-white text-gray-800">
              USD
            </option>
          </select>
          <div className="flex items-center gap-6">
            {user?.displayName ? (
              <p className="text-white font-medium text-md">
                Welcome{' '}
                <span className="font-medium">
                  {user?.displayName || 'User'}
                </span>
              </p>
            ) : (
              <>
                <Link to="/sign-in" className="text-white font-medium text-md">
                  Sign in
                </Link>
                <Link to="/sign-up" className="text-white font-medium text-md">
                  Create an account
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      <nav className="flex justify-center border-b">
        <div className="w-full max-w-7xl px-4 md:px-8 py-2 flex items-center justify-between">
          {/* show on less than lg */}
          <div className="flex lg:hidden gap-2">
            <Menu />
            <Search />
          </div>

          {/* Logo - less than lg in middle and more than lg left */}
          <Link to="/store" className="text-2xl font-bold text-accent">
            <Logo size="text-2xl lg:text-3xl" />
          </Link>

          {/* only show on larger than lg */}
          <ul className="hidden lg:flex gap-4">
            <li className="xl:text-lg">
              <Link to="/store/fashion">Fashion</Link>
            </li>
            <li className="xl:text-lg">
              <Link to="/store/electronics">Electronic</Link>
            </li>
            <li className="xl:text-lg">
              <Link to="/store/house-holds">House holds</Link>
            </li>
            <li className="xl:text-lg">
              <Link to="/store/personal-care">Personal care</Link>
            </li>
          </ul>

          <div className="flex gap-1">
            {/* search */}
            <button className="hidden lg:block text-sm p-1 transition h-10 p-2 hover:bg-gray-200 rounded-full">
              <Search />
              {/* <span className="font-medium">Cart</span> */}
            </button>
            {/* Profile Button */}
            <button
              className="text-sm p-2 rounded-full transition relative h-10 hover:bg-gray-200 transition"
              onClick={() => setIsModalOpen((prevState) => !prevState)}
            >
              <UserRound />
              {/* <span className="font-medium">{user?.displayName || 'User'}</span> */}

              {/* Dropdown Menu */}
              {isModalOpen && (
                <div
                  className="absolute right-0 -bottom-14 w-32 bg-white text-secondary rounded-lg shadow-lg z-10 p-4 border"
                  onClick={handleLogOut}
                >
                  <div className="flex items-center gap-1 cursor-pointer hover:text-primary">
                    <LogOut size={18} />
                    <span className="font-semibold">Sign Out</span>
                  </div>
                </div>
              )}
            </button>

            {/* cart Button */}
            <Link
              to="/cart"
              className="text-sm p-1 transition h-10 p-2 hover:bg-gray-200 rounded-full"
            >
              <ShoppingCart />
              {/* <span className="font-medium">Cart</span> */}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
