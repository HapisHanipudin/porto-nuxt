// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8Gsh4e5e5uyLoA1ARH-KEvS8VE0ont2I",
  authDomain: "hapishanipudiin.firebaseapp.com",
  projectId: "hapishanipudiin",
  storageBucket: "hapishanipudiin.appspot.com",
  messagingSenderId: "11995013048",
  appId: "1:11995013048:web:193c7368b69d1aa895794d",
  measurementId: "G-JKH5JZBTVD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
