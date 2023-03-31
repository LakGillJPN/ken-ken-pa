// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUhr2UaUt6CwNUwIW8boTW9mV7DWQ3xTk",
  authDomain: "ccp7-greenfiled.firebaseapp.com",
  projectId: "ccp7-greenfiled",
  storageBucket: "ccp7-greenfiled.appspot.com",
  messagingSenderId: "103434290490",
  appId: "1:103434290490:web:0f6a8f6dba1d3aa552bc03",
  measurementId: "G-JMKWPXEX7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export async function loginWithEmailandPassword(email, password) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login Success");
    return user;
  } catch (err) { 
    console.log("ERROR🔥", err);
  }
  
}