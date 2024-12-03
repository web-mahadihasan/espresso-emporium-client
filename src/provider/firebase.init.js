// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBIK-MPpf0u4YVlk3NJ6mHQWJRhyaIh-Zs",
//   authDomain: "espresso-emporium-bd.firebaseapp.com",
//   projectId: "espresso-emporium-bd",
//   storageBucket: "espresso-emporium-bd.firebasestorage.app",
//   messagingSenderId: "919542187304",
//   appId: "1:919542187304:web:38e33b0dc8dce0ab3bbc1d"
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;