// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgS9pR0Z48m1JY4MfNb3TWAl18360RONA",
  authDomain: "personal-services-site.firebaseapp.com",
  projectId: "personal-services-site",
  storageBucket: "personal-services-site.appspot.com",
  messagingSenderId: "793463589248",
  appId: "1:793463589248:web:a6c3684eedd56343735965"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;