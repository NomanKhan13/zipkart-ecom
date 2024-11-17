import AuthInput from '../../components/AuthInput';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import AuthContainer from './AuthContainer';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';

const SignInPage = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    const formData = new FormData(e.target);
    const authInfo = {
      username: formData.get('username'),
      password: formData.get('password'),
      isRemembered: formData.get('rememberMe'),
    };

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        authInfo.username,
        authInfo.password
      );
      await auth.currentUser.reload();
      // navigate('/products');
    } catch (error) {
      if (error.code == 'auth/invalid-credential') {
        setErrorMsg('Invalid email or password.');
      } else {
        setErrorMsg('An error occurred:', error.message); // Logs unexpected errors
      }
    } finally {
      e.target.reset();
      setIsFormSubmitted(false);
    }
  };

  return (
    <AuthContainer>
      <h2 className="text-center text-2xl font-medium leading-9 tracking-tight">
        Sign in to your account
      </h2>
      <form className="space-y-6" onSubmit={handleSignIn}>
        {errorMsg && (
          <p className="text-sm bg-red-500 p-2 rounded-sm text-white">
            {errorMsg}
          </p>
        )}
        <AuthInput label="Username" autoComplete="username" />
        <AuthInput label="Password" autoComplete="current-password" />
        <div className="flex items-center justify-between py-1">
          <div className="flex gap-2">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              aria-describedby="rememberMeDescription"
            />
            <label htmlFor="rememberMe" className="text-sm text-gray-900">
              Remember me
            </label>
          </div>
          <div className="text-sm cursor-pointer">
            <a className="text-primary font-semibold hover:brightness-125">
              Forgot your password?
            </a>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary py-2 rounded-md shadow-md font-semibold text-sm text-white hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:brightness-75 relative"
          disabled={isFormSubmitted}
        >
          <span>Sign in</span>
          {isFormSubmitted && (
            <LoaderCircle className="animate-spin absolute top-2 right-2" />
          )}
        </button>
      </form>
      <p className="text-center text-sm text-gray-500">
        Don't have an account?{' '}
        <Link
          to="/sign-up"
          className="font-semibold leading-6 text-primary hover:brightness-125 cursor-pointer"
        >
          Sign Up
        </Link>
      </p>
    </AuthContainer>
  );
};

export default SignInPage;
