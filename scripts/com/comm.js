// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCf2VfDcWmb3vtfVOR8iHo000y5wrpCrYc",
  authDomain: "simple-autentikasi.firebaseapp.com",
  projectId: "simple-autentikasi",
  storageBucket: "simple-autentikasi.appspot.com",
  messagingSenderId: "880696481156",
  appId: "1:880696481156:web:5a79af26f0477f4a15f9d1",
  measurementId: "G-PM4DD6LQEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);