import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import ZipKartStyleGuide from './pages/ZipKartStyleGuide';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
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
    path: '*', // Redirect any other route to the home route for unauthenticated users
    element: <Navigate to="/" replace />,
  },
]);

const UnauthenticatedApp = () => {
  return <RouterProvider router={router} />;
};

export default UnauthenticatedApp;
