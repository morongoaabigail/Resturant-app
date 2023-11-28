// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBew6p_iPQzUR5KURU0qX7EcOIaHDOrzF8",
  authDomain: "resturant-app-70fdc.firebaseapp.com",
  projectId: "resturant-app-70fdc",
  storageBucket: "resturant-app-70fdc.appspot.com",
  messagingSenderId: "178496518904",
  appId: "1:178496518904:web:65ff344f7af9d15cb6d90d",
  measurementId: "G-Z6DSRYCYJN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db}