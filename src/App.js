import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn } from './components/auth/SignIn';
import { ToastContainer } from 'react-toastify';
import { DashboardComponentabstract } from './components/DashboardComponent';
const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<SignIn />} />
        
        <Route
          path="/dashboard"
          element={<DashboardComponentabstract/>} />
        
      </Routes>
      <ToastContainer /> 
    </BrowserRouter>
    
  );
};

export default App;
