// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCBoTBJW8t-RVfvcjr8vSinGg6je5EGtIM",
  authDomain: "gdsc-899f1.firebaseapp.com",
  projectId: "gdsc-899f1",
  storageBucket: "gdsc-899f1.appspot.com",
  messagingSenderId: "692749815959",
  appId: "1:692749815959:web:daf5a3ca1c4dae5c5b59d2",
  measurementId: "G-C61CN89G3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getFirestore(app);
const auth = getAuth(app);
export {db,auth}