import { auth } from "./firebase-init.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const form = document.getElementById("reg-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Регистрация успешна!");
            window.location.href = "dashboard.html"; 
        })
        .catch((error) => {
            console.error(error);
            alert("Ошибка: " + error.message);
        });
});
