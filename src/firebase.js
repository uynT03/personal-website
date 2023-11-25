
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore, collection } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDL_S7_c9E_PsY4c7YTtsO3pmJq_z-PULc",
  authDomain: "personal-website-784e7.firebaseapp.com",
  projectId: "personal-website-784e7",
  storageBucket: "personal-website-784e7.appspot.com",
  messagingSenderId: "363319100670",
  appId: "1:363319100670:web:efd57a4af89931fcd611af",
  measurementId: "G-52S6CYR3EZ"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
export const myCollectionRef = collection(db, 'portfolio'); 
export const signInWithGoogle = () => signInWithPopup(auth, provider);