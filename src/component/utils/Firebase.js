// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBYff0ZIroccSCrYc6S4asJ1W_fyDtXs4",
  authDomain: "login-or-sinup-from-exprince.firebaseapp.com",
  projectId: "login-or-sinup-from-exprince",
  storageBucket: "login-or-sinup-from-exprince.firebasestorage.app",
  messagingSenderId: "552147788623",
  appId: "1:552147788623:web:610d58864eb62165871b3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
