// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBJPiaCX2jasy7URxN5pBk9q__HwMHP2PE",
  authDomain: "hybrid-saga-258704.firebaseapp.com",
  databaseURL: "https://hybrid-saga-258704.firebaseio.com",
  projectId: "hybrid-saga-258704",
  storageBucket: "hybrid-saga-258704.appspot.com",
  messagingSenderId: "486046895460",
  appId: "1:486046895460:web:966a266c6bff741b6dfe71",
  measurementId: "G-Y66ZP8FYLR"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };