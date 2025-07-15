import { Link, useNavigate } from 'react-router-dom';
import AuthInput from '../../components/AuthInput';
import AuthContainer from './AuthContainer';
import { isValidPassword } from '../../utils/isValidPassword';
import { useContext, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase';
import { handleUserRegistration } from '../../utils/user';
import { AuthContext } from '../../contexts/AuthContext';

const SignUpPage = () => {
  const [error, setError] = useState(null);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);


  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);
    setIsFormSubmitting(true);

    const formData = new FormData(e.target);
    const authInfo = {
      displayName: formData.get('name'),
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      // Validate password requirements
      isValidPassword(authInfo.password);

      // await handleUserRegistration(authInfo);

      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        authInfo.username,
        authInfo.password
      );
      const user = userCredentials.user;
      await updateProfile(user, {
        displayName: authInfo.displayName,
      });
      // Force reload to ensure updates are reflected
      await auth.currentUser.reload();
      const updatedUser = auth.currentUser;

      // Log for debugging
      console.log("Updated user after reload:", updatedUser);

      setUser(updatedUser);
      navigate('/');
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Email is already in use');
      } else {
        setError(error.message || 'An error occurred. Please try again.');
      }
    } finally {
      setIsFormSubmitting(false);
    }
  };

  return (
    <AuthContainer>
      <h2 className="text-center text-2xl font-medium leading-9 tracking-tight">
        Sign Up for an Account
      </h2>
      <form className="space-y-6" onSubmit={handleSignUp}>
        {error && (
          <p className="text-sm bg-red-500 p-2 rounded-sm text-white">
            {error}
          </p>
        )}
        <AuthInput label="Name" autoComplete="name" name="name" />
        <AuthInput label="Username" autoComplete="username" name="username" />
        <AuthInput
          label="Password"
          autoComplete="new-password"
          name="password"
        />

        <button
          type="submit"
          className={`w-full bg-primary py-2 rounded-md shadow-md font-semibold text-sm text-white hover:brightness-125 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${isFormSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          disabled={isFormSubmitting}
        >
          {isFormSubmitting ? 'Signing up...' : 'Sign up'}
        </button>
      </form>

      <p className="text-center text-sm text-gray-500">
        Already have an account?{' '}
        <Link
          to="/sign-in"
          className="font-semibold leading-6 text-primary hover:brightness-125 cursor-pointer"
        >
          Sign In
        </Link>
      </p>
    </AuthContainer>
  );
};

export default SignUpPage;
