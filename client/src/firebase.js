// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-94058.firebaseapp.com",
  projectId: "mern-blog-94058",
  storageBucket: "mern-blog-94058.firebasestorage.app",
  messagingSenderId: "429266187173",
  appId: "1:429266187173:web:68dd9fb88425e36a9b6e4c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);