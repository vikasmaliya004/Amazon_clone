import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1D_lTUU5r503C_oWlp51BUPZ1_KPNBcQ",
    authDomain: "clone-c3927.firebaseapp.com",
    projectId: "clone-c3927",
    storageBucket: "clone-c3927.appspot.com",
    messagingSenderId: "440123909814",
    appId: "1:440123909814:web:b79380a0d0343af5236817",
    measurementId: "G-F0DCEF40Z0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };