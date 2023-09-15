import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyDoSwusO29gDxK6jbpDIZ_wyuohElP9WSI",
  authDomain: "eventlist-77a6d.firebaseapp.com",
  projectId: "eventlist-77a6d",
  storageBucket: "eventlist-77a6d.appspot.com",
  messagingSenderId: "907679413106",
  appId: "1:907679413106:web:e9d2ee7731ef1d85b5a3eb",
  measurementId: "G-9VQNFM8GDN"
};



const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
