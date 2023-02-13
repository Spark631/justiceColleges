// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAudXEwwxQfoVNDhDdJYBFXjr4tjxZiIWI",
  authDomain: "justice-college.firebaseapp.com",
  databaseURL: "https://justice-college-default-rtdb.firebaseio.com",
  projectId: "justice-college",
  storageBucket: "justice-college.appspot.com",
  messagingSenderId: "384708680296",
  appId: "1:384708680296:web:9c213e18337580983179dd",
  databaseURL: "https://justice-college-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
