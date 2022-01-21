import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBNyHvVToOzWG9zlIcgzhCIYhZ5jBMNpTc",
  authDomain: "e-commerce-alyssa.firebaseapp.com",
  projectId: "e-commerce-alyssa",
  storageBucket: "e-commerce-alyssa.appspot.com",
  messagingSenderId: "70287367806",
  appId: "1:70287367806:web:b7e08df7505e02ca0ec22f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);