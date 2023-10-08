// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUlqGrTMOIv0oVpFEA-oQYWmKIfR2fv14",
  authDomain: "event-management-assignm-e0379.firebaseapp.com",
  projectId: "event-management-assignm-e0379",
  storageBucket: "event-management-assignm-e0379.appspot.com",
  messagingSenderId: "1002454634963",
  appId: "1:1002454634963:web:34023134814e986a8f1f26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
