// firebase.js

// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";

// Your Firebase configuration (copied from the provided code)
const firebaseConfig = {
    apiKey: "AIzaSyBs-R6uJx3HbEi6ug4Qn5QOWjtfQljIJv8",
    authDomain: "ordinal-widget.firebaseapp.com",
    projectId: "ordinal-widget",
    storageBucket: "ordinal-widget.appspot.com",
    messagingSenderId: "23043709556",
    appId: "1:23043709556:web:ad009ac42a0fe4d3e8cf21",
    measurementId: "G-HD6XQT1RGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; // Export the initialized Firebase app