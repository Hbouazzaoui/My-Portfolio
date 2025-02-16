// Typing Animation for Home Section
const text = "I'm Hamouda Bouazzaoui";
let index = 0;
const heroTitle = document.getElementById("home-h");

function typeText() {
    if (index < text.length) {
        heroTitle.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 70); 
    } else {
        setTimeout(() => {
            index = 0; 
            heroTitle.innerHTML = ''; 
            typeText(); 
        }, 1000); 
    }
}
window.onload = function () {
    typeText();
};

// Mobile Menu Toggle
const menuToggle = document.getElementById("mobile-menu");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Automatic Slideshow for Home Section
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    slides[currentSlide].classList.add("active");

    setInterval(function () {
        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");
    }, 5000);    
});