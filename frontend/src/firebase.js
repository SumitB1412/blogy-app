import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0gbPyHkCftheZNSsIeJaJoq3Wq-23pz0",
  authDomain: "blogy-app-7f70b.firebaseapp.com",
  projectId: "blogy-app-7f70b",
  storageBucket: "blogy-app-7f70b.appspot.com",
  messagingSenderId: "90488930738",
  appId: "1:90488930738:web:ad68c6c26bad5769d924ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);