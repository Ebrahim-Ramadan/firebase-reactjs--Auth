// src/components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

export const DashboardComponentabstract = () => {
  const userState = useSelector((state) => state.auth);
  const isAuthenticated = userState.isAuthenticated;
  const userCredential = userState.user;
  //debug
  console.log(userCredential);
  return (
    <div>
      {isAuthenticated ? (
        <>
          <p>Signed in as: {userCredential.email}</p>
          <p>You are now a verified user, and this is the dashboard.</p>
        </>
      ) : (
        <p>Login first</p>
      )}
    </div>
  );
};

