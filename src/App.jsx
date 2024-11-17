import { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import UnauthenticatedApp from './UnauthenticatedApp';
import AuthenticatedApp from './AuthenticatedApp';

const App = () => {
  const { user } = useContext(AuthContext);

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default App;
