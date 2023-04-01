const firebase = require("firebase/app");
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");
const firebaseConfig = require("./firebase_conf.js");

const enviroment = process.env.NODE_ENV === "production" ? "production" : "development";

// Initialize Firebase
firebase.initializeApp(firebaseConfig[enviroment].config);

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