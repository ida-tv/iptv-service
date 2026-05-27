import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-eXQStkGRkueimWptlpquVyao-TBhqJk",
  authDomain: "ida-tv-plei.firebaseapp.com",
  projectId: "ida-tv-plei",
  storageBucket: "ida-tv-plei.firebasestorage.app",
  messagingSenderId: "202806935937",
  appId: "1:202806935937:web:01cd30f5af182a47156880"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
