// src/components/AuthForm.js
import React, { useState } from 'react';
import  { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login, signup } from '../../store/actions/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SignIn = () => {
  const navTo = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();

  const toastify = (txt) => {
    toast.info(txt, {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1500,
      theme: 'dark',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      dispatch(login(email, password))
      toastify('Logged in successfully');
      // navTo('/dashboard')
    } else {
      dispatch(signup(email, password));
      toastify('Account created successfully. Now login.');
      setIsLogin(true);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="outlined" size="large">
          {isLogin ? 'Login' : 'Signup'}
        </Button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Signup' : 'Login'} instead</p>
    </div>
  );
};

