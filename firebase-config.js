// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyASA0e2yRQdXPo_xARjcF5_VIdywLHUzdU",
  authDomain: "ai--customer--churn--predictor.firebaseapp.com",
  projectId: "ai--customer--churn--predictor",
  storageBucket: "ai--customer--churn--predictor.firebasestorage.app",
  messagingSenderId: "729538578046",
  appId: "1:729538578046:web:23d8cb886e636bb25ffa2f",
  measurementId: "G-5CYV9XKM1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
