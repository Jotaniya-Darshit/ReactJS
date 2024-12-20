// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClM6RW_n0KknIr6IKL6Pecx3kzySiz7xo",
  authDomain: "for-project-624c6.firebaseapp.com",
  projectId: "for-project-624c6",
  storageBucket: "for-project-624c6.firebasestorage.app",
  messagingSenderId: "124056112387",
  appId: "1:124056112387:web:8364bbacfec08e77dbad36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const DataBase = getFirestore(app);

export { auth, DataBase };

