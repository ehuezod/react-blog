// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFLQlARtEpiNq1jAf-XewnXfTjTaSRyLI",
    authDomain: "blog-react-fe2eb.firebaseapp.com",
    projectId: "blog-react-fe2eb",
    storageBucket: "blog-react-fe2eb.appspot.com",
    messagingSenderId: "23749688013",
    appId: "1:23749688013:web:56fc807756313e93e50784",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();