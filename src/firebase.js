// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfgAVnVWlslLKIZ2kbwineCt2sGvP-bbE",
    authDomain: "netflix-gpt-d8a76.firebaseapp.com",
    projectId: "netflix-gpt-d8a76",
    storageBucket: "netflix-gpt-d8a76.appspot.com",
    messagingSenderId: "527886878937",
    appId: "1:527886878937:web:93b57e0c887a294d2956c8",
    measurementId: "G-4HS3CYHTM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);