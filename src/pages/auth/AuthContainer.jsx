// import Rocket from '../../../public/rocket.svg';
import Logo from '../../components/Logo';

const AuthContainer = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Authentication Form Container */}
      <div className="flex-1 flex justify-center px-6 py-12 lg:px-8 min-h-full">
        <div className="w-full max-w-sm flex flex-col gap-8">
          <Logo size="text-4xl" />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
