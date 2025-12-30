
console.log("DB:", db);


// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
// Back to Top Button
const backToTop = document.getElementById("backToTop");

// Show button when scrolling
window.onscroll = function () {
    if (document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
};

// Scroll to top when clicked
backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


import { db, collection, addDoc, serverTimestamp } from "./firebase.js";

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "contactMessages"), {
      name: form.name.value,
      email: form.email.value,
      organization: form.organization.value,
      message: form.message.value,
      createdAt: serverTimestamp()
    });

    alert("✅ Message sent successfully.We will contact you soon from Email");
    form.reset();

  } catch (error) {
    console.error("🔥 Firebase Error:", error);
    alert(error.message);
  }
});

