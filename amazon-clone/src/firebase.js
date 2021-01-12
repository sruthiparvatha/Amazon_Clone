// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC6m2--U6wf5tFyecbZGYBNRz4wec-B-Qw",
    authDomain: "exampleprojects-9c6a5.firebaseapp.com",
    databaseURL: "https://exampleprojects-9c6a5.firebaseio.com",
    projectId: "exampleprojects-9c6a5",
    storageBucket: "exampleprojects-9c6a5.appspot.com",
    messagingSenderId: "863305756672",
    appId: "1:863305756672:web:42c1ab7b733354309728e5",
    measurementId: "G-KZX8KM7XBZ"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };