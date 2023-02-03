import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from '@firebase/firestore'
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAG134qpAT74jOnIqM5UM98mJYV2AtrasM",
  authDomain: "bookingapp-6bacc.firebaseapp.com",
  databaseURL: "https://bookingapp-6bacc-default-rtdb.firebaseio.com",
  projectId: "bookingapp-6bacc",
  storageBucket: "bookingapp-6bacc.appspot.com",
  messagingSenderId: "748040864438",
  appId: "1:748040864438:web:68f474432ea840b9bb9c17"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app); // Realtime Database
export const db2 = getFirestore(app); // Firestore Datebase
export const storage = getStorage(app);; // For storage
