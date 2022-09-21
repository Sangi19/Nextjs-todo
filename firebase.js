// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUx886xy6wqIW3T7O3v7yqdTwSyfQSxuU",
  authDomain: "nextjs-firebase-8d916.firebaseapp.com",
  projectId: "nextjs-firebase-8d916",
  storageBucket: "nextjs-firebase-8d916.appspot.com",
  messagingSenderId: "922752107495",
  appId: "1:922752107495:web:756fe0fe1e2e2592dcb342",
  measurementId: "G-21S0E2TKHT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export {db}