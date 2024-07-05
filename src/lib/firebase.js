
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-34563.firebaseapp.com",
  projectId: "react-chat-34563",
  storageBucket: "react-chat-34563.appspot.com",
  messagingSenderId: "722502232619",
  appId: "1:722502232619:web:37eaaa90aa304402ccd86e"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()