// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-QL4ZBTvnUN56dbGHgJv3qpsnjpCF_GE",
    authDomain: "corporate-event-manageme-5e5db.firebaseapp.com",
    projectId: "corporate-event-manageme-5e5db",
    storageBucket: "corporate-event-manageme-5e5db.appspot.com",
    messagingSenderId: "725715926518",
    appId: "1:725715926518:web:80bf60b187f583a68b5bd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app