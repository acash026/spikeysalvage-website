// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgA2nXwGoz5XzAWd3kYsCePgr7DAyyAB4",
  authDomain: "accelera-d89a3.firebaseapp.com",
  projectId: "accelera-d89a3",
  storageBucket: "accelera-d89a3.firebasestorage.app",
  messagingSenderId: "119858964577",
  appId: "1:119858964577:web:b525cda694df84576a6220",
  measurementId: "G-TSL9VYD0YC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
