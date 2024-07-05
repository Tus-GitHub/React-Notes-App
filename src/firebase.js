import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "react-notes-dd2b1.firebaseapp.com",
  projectId: "react-notes-dd2b1",
  storageBucket: "react-notes-dd2b1.appspot.com",
  messagingSenderId: "211449334771",
  appId: "1:211449334771:web:85137e347b5083eccc6086"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")