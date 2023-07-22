// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5Sp_WHT4wxgcAi_zAgKzDACizpEghZw8",
  authDomain: "users-reactjs-9d5c7.firebaseapp.com",
  projectId: "users-reactjs-9d5c7",
  storageBucket: "users-reactjs-9d5c7.appspot.com",
  messagingSenderId: "897863154002",
  appId: "1:897863154002:web:327d7a2a7a62932bbca28b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export  { app, auth };