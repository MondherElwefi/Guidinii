// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXqYddosIsUEik3L7YRGZ5tWsftlU952c",
  authDomain: "guidinii.firebaseapp.com",
  projectId: "guidinii",
  storageBucket: "guidinii.appspot.com",
  messagingSenderId: "413728623208",
  appId: "1:413728623208:web:0fabb2191d3fe2600989dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);