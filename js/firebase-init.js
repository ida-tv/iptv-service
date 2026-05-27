// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-eXQStkGRkueimWptlpquVyao-TBhqJk",
  authDomain: "ida-tv-plei.firebaseapp.com",
  projectId: "ida-tv-plei",
  storageBucket: "ida-tv-plei.firebasestorage.app",
  messagingSenderId: "202806935937",
  appId: "1:202806935937:web:01cd30f5af182a47156880",
  measurementId: "G-7R1MBNN1HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
