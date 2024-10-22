// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4W_3BiCWdPeHeh-SSgEYnsMrAykDJcGI",
  authDomain: "netflixgpt-d2444.firebaseapp.com",
  projectId: "netflixgpt-d2444",
  storageBucket: "netflixgpt-d2444.appspot.com",
  messagingSenderId: "669021204629",
  appId: "1:669021204629:web:84b84e93e313e278f36b9c",
  measurementId: "G-R5YJVNPJBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();