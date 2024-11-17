import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import StoreFrontPage from './pages/StoreFrontPage';
import CartProvider from './contexts/CartContext';
import Cart from './pages/Cart/Cart';
import ProductProvider from './contexts/ProductContext';
import ZipKartStyleGuide from './pages/ZipKartStyleGuide';
import Category from './pages/Category/Category';
import CurrencyProvider from './contexts/CurrencyContext';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
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
    ],
  },
  {
    path: '/cart',
    element: <Cart />,
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
