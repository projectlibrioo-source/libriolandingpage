


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
        apiKey: "AIzaSyAYUGrCOag5nFA0yB6DiwblYtX9OZf56Uw",
        authDomain: "librioo-fb90e.firebaseapp.com",
        databaseURL: "https://librioo-fb90e-default-rtdb.firebaseio.com",
        projectId: "librioo-fb90e",
        storageBucket: "librioo-fb90e.firebasestorage.app",
        messagingSenderId: "187759958545",
        appId: "1:187759958545:web:b8d6aef91f203b1a1fafb0",
        measurementId: "G-NC4KEE9KYJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };
