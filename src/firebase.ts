// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDmVRwStfn1Sncy-ZkPuKDz7NxTBAYfWQ",
  authDomain: "wuc-info-exchange.firebaseapp.com",
  projectId: "wuc-info-exchange",
  storageBucket: "wuc-info-exchange.appspot.com",
  messagingSenderId: "1089851658093",
  appId: "1:1089851658093:web:83c2bbf1bb9be2f3569464",
  measurementId: "G-79MQBLJGQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
