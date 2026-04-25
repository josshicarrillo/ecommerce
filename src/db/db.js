
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBMGPch--ekzpYLs95746mKLmWY31OyvSs",
    authDomain: "ecommerce-a80e5.firebaseapp.com",
    projectId: "ecommerce-a80e5",
    storageBucket: "ecommerce-a80e5.firebasestorage.app",
    messagingSenderId: "840754842554",
    appId: "1:840754842554:web:59239c2a00873d81032b83"
};

// Initialize Firebase
initializeApp(firebaseConfig); 

const db = getFirestore();
export default db;