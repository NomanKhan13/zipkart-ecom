import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';

export const handleUserRegistration = async (authInfo) => {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    authInfo.username,
    authInfo.password
  );
  const user = userCredentials.user;
  await updateProfile(user, {
    displayName: authInfo.displayName,
  });
  await auth.currentUser.reload();
};
