// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9BnPB3bAGRvdRHdJNavUh9e_jDdc1Tmg",
  authDomain: "foodtech1-ac96c.firebaseapp.com",
  projectId: "foodtech1-ac96c",
  storageBucket: "foodtech1-ac96c.appspot.com",
  messagingSenderId: "237402542812",
  appId: "1:237402542812:web:103db0fe385c743cb29a19",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication= getAuth(app);
