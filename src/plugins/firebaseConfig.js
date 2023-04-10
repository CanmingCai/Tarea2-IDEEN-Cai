import firebase from "firebase/compat/app"
import "firebase/firestore";
import  "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6olGO4oVJK8-suOzwx5pgjY09Bt7PIcc",
    authDomain: "tarea2-ideen-a8d4c.firebaseapp.com",
    projectId: "tarea2-ideen-a8d4c",
    storageBucket: "tarea2-ideen-a8d4c.appspot.com",
    messagingSenderId: "15892873770",
    appId: "1:15892873770:web:bc017f09ff4adb5cf2f953",
    measurementId: "G-4XH2X98B79"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore;
