// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVXKTiVocqxyYtxR96vjznPAhiMuqt71g",
  authDomain: "simple-firebase-auth-815b6.firebaseapp.com",
  projectId: "simple-firebase-auth-815b6",
  storageBucket: "simple-firebase-auth-815b6.firebasestorage.app",
  messagingSenderId: "1062675740712",
  appId: "1:1062675740712:web:fe2f229b943a1b2bf79d1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);