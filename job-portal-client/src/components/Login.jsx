import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = () => {
    googleProvider.setCustomParameters({
      prompt: 'select_account',
    });

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert("Login Successful!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
        alert("Login Failed: " + errorMessage);
      });
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        alert("Logout Successful!");
      })
      .catch((error) => {
        console.error(error.message);
        alert("Logout Failed: " + error.message);
      });
  };

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <button className='bg-blue px-8 py-2 font-bold text-white text-lg' onClick={handleLogin}>
        Login
      </button>
      <button className='bg-red-500 px-8 py-2 font-bold text-white text-lg ml-4' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Login;
