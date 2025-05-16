// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "morning-dispatch-6366e.firebaseapp.com",
  projectId: "morning-dispatch-6366e",
  storageBucket: "morning-dispatch-6366e.firebasestorage.app",
  messagingSenderId: "439521007140",
  appId: "1:439521007140:web:1b59dee5792b457b17eab1",
  measurementId: "G-8V016FHT98"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);