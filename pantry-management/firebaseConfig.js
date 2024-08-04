// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwgVskSAgPk8V-9KV7qp04iXuyZYx7aVo",
  authDomain: "inventory-management-1826b.firebaseapp.com",
  projectId: "inventory-management-1826b",
  storageBucket: "inventory-management-1826b.appspot.com",
  messagingSenderId: "204501547320",
  appId: "1:204501547320:web:fe69539d18171eaae029cd",
  measurementId: "G-474WD4ZMWX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);