// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOChnWLumACsiHjY10TlxQXP0SkXnqesg",
  authDomain: "cinemate-gpt.firebaseapp.com",
  projectId: "cinemate-gpt",
  storageBucket: "cinemate-gpt.appspot.com",
  messagingSenderId: "546159441191",
  appId: "1:546159441191:web:8443add48375deac97e502",
  measurementId: "G-ZRZHDXWFLR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
