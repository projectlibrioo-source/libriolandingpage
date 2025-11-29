
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

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

    document.getElementById("contactForm").addEventListener("submit", async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const organization = document.getElementById("organization").value;
        const message = document.getElementById("message").value;

        try {
            await addDoc(collection(db, "contactMessages"), {
                name: name,
                email: email,
                organization: organization,
                message: message,
                timestamp: new Date()
            });

            alert("Message sent successfully!");
            event.target.reset();
        } catch (error) {
            alert("Error sending message: " + error.message);
        }
    });

