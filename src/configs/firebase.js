import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvu1dDK061ofXKSbe0MfLSgvGUkrjhJg4",
    authDomain: "coffeeshop-ae896.firebaseapp.com",
    projectId: "coffeeshop-ae896",
    storageBucket: "coffeeshop-ae896.appspot.com",
    messagingSenderId: "622876418141",
    appId: "1:622876418141:web:45e463c5bcf8dee444adb4",
    measurementId: "G-NP104Z729Y"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const firebase = {
  app,
  auth,
  db,
  storage,
  provider
};

export default firebase;