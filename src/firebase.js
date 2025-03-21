import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD83dxhXbXnXGGBCD2lBfMqItiZfFzDYXU",
    authDomain: "financial-reports-18cfc.firebaseapp.com",
    projectId: "financial-reports-18cfc",
    storageBucket: "financial-reports-18cfc.firebasestorage.app",
    messagingSenderId: "402131159777",
    appId: "1:402131159777:web:9d2ba9158334d9f07cc5a0",
    measurementId: "G-SVHTF4NJJY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
