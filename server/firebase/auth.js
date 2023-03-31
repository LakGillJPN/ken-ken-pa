const firebase = require("firebase/app");
const {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyAUhr2UaUt6CwNUwIW8boTW9mV7DWQ3xTk",
  authDomain: "ccp7-greenfiled.firebaseapp.com",
  projectId: "ccp7-greenfiled",
  storageBucket: "ccp7-greenfiled.appspot.com",
  messagingSenderId: "103434290490",
  appId: "1:103434290490:web:76052eefd21135ad52bc03",
  measurementId: "G-11GFF02X0T"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = getAuth();

module.exports = {
  // login
  loginWithEmailAndPassword: async function (email, password) {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      return user;
    } catch (err) {
      console.log("ERROR🔥", err);
      return undefined;
    }
  }
}