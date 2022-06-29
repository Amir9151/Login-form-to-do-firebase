// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
//import * as firebase from "firebase/app";
import { firebase } from '@firebase/app'
import "firebase/auth"
import "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3kR_I5ldEoHIuw7NG2B_tO5YifeX2D6w",
  authDomain: "awesome-todo-78fa7.firebaseapp.com",
  databaseURL: "https://awesome-todo-78fa7-default-rtdb.firebaseio.com",
  projectId: "awesome-todo-78fa7",
  storageBucket: "awesome-todo-78fa7.appspot.com",
  messagingSenderId: "74480148574",
  appId: "1:74480148574:web:a1f9ba1b99e65d9c9454cf",
  measurementId: "G-3C18E45S3S"
};

// Initialize Firebase
 const firebaseApp =firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
let firebaseAuth=firebaseApp.auth()
//console.log("firebase===========",firebaseAuth)
let firebaseDb=firebaseApp.database()
export{firebaseAuth,firebaseDb}
