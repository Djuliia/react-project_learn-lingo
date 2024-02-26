import { auth } from 'components/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, user => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => listen();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log('success'))
      .catch(error => console.log(error));
  };

  return (
    <>
      {authUser && (
        <div>
          <p>{`Signed in as ${authUser.email}`}</p>
          <button onClick={userSignOut}>Log Out</button>
        </div>
      )}
    </>
  );
};
