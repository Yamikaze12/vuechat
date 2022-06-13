import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCtizi2QxGOzpS4O0yZJMjfgj82YAbVoUQ",
    authDomain: "vuechat-8fd37.firebaseapp.com",
    projectId: "vuechat-8fd37",
    storageBucket: "vuechat-8fd37.appspot.com",
    messagingSenderId: "535391731030",
    appId: "1:535391731030:web:176e806ad0014d2252aaf7",
    measurementId: "G-V5DFWBGX65"
  };

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export{ projectAuth, projectFirestore, timestamp }