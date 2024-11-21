import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import StoreFrontPage from './pages/StoreFrontPage/StoreFrontPage';
import CartProvider from './contexts/CartContext';
import Cart from './pages/Cart/Cart';
import ProductProvider from './contexts/ProductContext';
import ZipKartStyleGuide from './pages/ZipKartStyleGuide';
import Category from './pages/Category/Category';
import CurrencyProvider from './contexts/CurrencyContext';
import Navbar from './components/Navbar';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Search from './components/Search';
import Checkout from './pages/Checkout/Checkout';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/style-guide',
    element: <ZipKartStyleGuide />,
  },
  {
    path: '/',
    element: <Layout />, // Layout applied to all nested routes
    children: [
      {
        path: '/',
        element: <StoreFrontPage />,
      },
      {
        path: '/collection/:category',
        element: <Category />,
      },
      {
        path: '/products/:productId',
        element: <ProductDetailPage />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order-history',
        // element: <Cart />,
      },
      {
        path: '/order-detail/:orderId',
        // element: <Cart />,
      },
      {
        path: '/profile',
        // element: <Cart />,
      },
    ],
  },
  {
    path: "/checkout",
    element: <Checkout />
  },

  {
    path: "/search",
    element: <Search />
  },

  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

const AuthenticatedApp = () => {
  const { user } = useContext(AuthContext);

  return (
    <CurrencyProvider>
      <ProductProvider>
        <CartProvider userId={user.displayName}>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </CurrencyProvider>
  );
};

export default AuthenticatedApp;
