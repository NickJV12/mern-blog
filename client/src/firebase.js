// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "VITE_FIREBASE_API_KEY",
  authDomain: "mern-blog-6fbf9.firebaseapp.com",
  projectId: "mern-blog-6fbf9",
  storageBucket: "mern-blog-6fbf9.appspot.com",
  messagingSenderId: "986244515247",
  appId: "1:986244515247:web:12260679e89814af181b5a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);