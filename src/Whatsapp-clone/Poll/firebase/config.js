import firebase from "firebase/app"
import "firebase/firestore";
// import {firebaseConfig} from "../firebaseConfig"

const firebaseConfig = {
  apiKey: "AIzaSyBHq90yJun_nP91bJvDVwkrsm0dR3UJi4A",
  authDomain: "myntra-chatapp.firebaseapp.com",
  projectId: "myntra-chatapp",
  storageBucket: "myntra-chatapp.appspot.com",
  messagingSenderId: "1072835173963",
  appId: "1:1072835173963:web:c54dfc10f3c3c85a41f7ce",
  measurementId: "G-4HW4SJTLZD"
};

  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
