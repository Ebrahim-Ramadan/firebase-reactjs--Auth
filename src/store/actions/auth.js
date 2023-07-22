// src/store/actions/auth.js
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {app, auth } from '../../firebase';

const loginSuccess = (user) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: user,
  };
};

const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error, 
  };
};



const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS',
  };
};

export const login = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(loginSuccess(userCredential.user));
        // toastify('Logged in successfully');
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};

export const signup = (email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        dispatch(loginSuccess(userCredential.user));
        console.log(userCredential.user);
        // toastify('Account created successfully. Now login.');
      })
      .catch((error) => {
        dispatch(loginFailure(error.message));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    // Implement logout logic here (if needed)
    // For simplicity, we'll just sign out the user
    app.auth().signOut().then(() => {
      dispatch(logoutSuccess());
    });
  };
};