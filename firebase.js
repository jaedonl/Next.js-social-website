// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBnxeb6_gpsIQ0UG9p1kmhGrSSKOCRXpfY",
    authDomain: "twitter-clone-52997.firebaseapp.com",
    projectId: "twitter-clone-52997",
    storageBucket: "twitter-clone-52997.appspot.com",
    messagingSenderId: "384619022050",
    appId: "1:384619022050:web:59f1864a9fc11e730300bb"
};

// Initialize Firebase
// Only because it its Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };