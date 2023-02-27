import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-8L9-A4I0KdWd718wODznu1_yfJNkK38",
  authDomain: "the-observer-2ce80.firebaseapp.com",
  projectId: "the-observer-2ce80",
  storageBucket: "the-observer-2ce80.appspot.com",
  messagingSenderId: "610675494611",
  appId: "1:610675494611:web:9a8824a49279cb3e3a0e26",
};


const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const db = getFirestore();
export const storage = getStorage(app);