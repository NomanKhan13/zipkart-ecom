import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import ZipKartStyleGuide from './pages/ZipKartStyleGuide';
import Navbar from './components/Navbar';
import StoreFrontPage from './pages/StoreFrontPage/StoreFrontPage';
import Category from './pages/Category/Category';
import ProductDetailPage from './pages/ProductDetail/ProductDetailPage';
import Cart from './pages/Cart/Cart';
import CurrencyProvider from './contexts/CurrencyContext';
import CartProvider from './contexts/CartContext';
import Search from './components/Search';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <StoreFrontPage />
      },
      {
        path: "/collection/:category",
        element: <Category />
      },
      {
        path: "/products/:productId",
        element: <ProductDetailPage />
      },
      {
        path: "/cart",
        element: <Cart />
      }
    ]
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: '/zip-style-guide',
    element: <ZipKartStyleGuide />,
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
  },
  {
    path: '/sign-in',
    element: <SignInPage />,
  },
  {
    path: '*', // Redirect any other route to the home route for unauthenticated users
    element: <Navigate to="/" replace />,
  },
]);

const UnauthenticatedApp = () => {
  return (<CurrencyProvider><CartProvider><RouterProvider router={router} /></CartProvider></CurrencyProvider>);
};

export default UnauthenticatedApp;
