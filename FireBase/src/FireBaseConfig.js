// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZ9gBSZskvzrnUpUt9wQ2-QW-TxvJxDCs",
  authDomain: "for-react-9544e.firebaseapp.com",
  projectId: "for-react-9544e",
  storageBucket: "for-react-9544e.firebasestorage.app",
  messagingSenderId: "116088285491",
  appId: "1:116088285491:web:f2191c108850b6112b7646"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const DataBase = getFirestore(app);

export { auth,DataBase };