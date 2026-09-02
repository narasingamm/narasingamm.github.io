/* =========================================================
   NARASINGAM M - PORTFOLIO JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

    });

});


/* ================= TYPING EFFECT ================= */

const typingText = document.getElementById("typingText");

const phrases = [
    "Reliable Automation Frameworks.",
    "Scalable API Test Suites.",
    "CI/CD Quality Pipelines.",
    "Better Software Quality."
];

let phraseIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentPhrase = phrases[phraseIndex];

    if (!deleting) {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;

        if (characterIndex === currentPhrase.length) {

            deleting = true;

            setTimeout(typeEffect, 1800);

            return;

        }

    } else {

        typingText.textContent =
            currentPhrase.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            phraseIndex =
                (phraseIndex + 1) % phrases.length;

        }

    }

    const speed = deleting ? 40 : 75;

    setTimeout(typeEffect, speed);

}


typeEffect();


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= BACK TO TOP ================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ================= CURRENT YEAR ================= */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* ================= ACTIVE NAVIGATION ================= */

const sections =
    document.querySelectorAll("section[id]");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.getAttribute("href") ===
            `#${currentSection}`
        ) {

            item.classList.add("active");

        }

    });

});