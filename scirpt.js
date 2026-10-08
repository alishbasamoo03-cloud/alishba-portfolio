// =========================
// SIMPLE SCROLL ANIMATION
// =========================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .service-card, .info-card"
);

window.addEventListener("scroll", function () {

    cards.forEach(function(card) {

        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 80) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});


// =========================
// CONTACT FORM
// =========================

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message is ready to be sent.");

    form.reset();

});


// =========================
// MOUSE 3D EFFECT
// =========================

const heroImage = document.querySelector(".hero-image");

heroImage.addEventListener("mousemove", function(event) {

    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    const rotateX = (y - 0.5) * 10;
    const rotateY = (x - 0.5) * 10;

    heroImage.style.transform =
        `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;

});


heroImage.addEventListener("mouseleave", function() {

    heroImage.style.transform =
        "rotateX(0deg) rotateY(0deg)";

});