// ===== Typing Effect =====
const typingText = document.getElementById("typing-text");
const words = [
  "Full Stack Developer ",
  "Database Designer ",
  "System Analyst ",
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  typingText.textContent = currentText;

  let typingSpeed = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typingSpeed = 1200;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 400;
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// ===== Highlight Active Nav on Scroll =====
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href").includes(current)) {
      a.classList.add("active");
    }
  });
});

// ===== Toggle menu on mobile =====
const toggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
  toggle.classList.toggle("open");
});

// ===== Smooth Scroll (Navbar + Footer logo) =====
document.addEventListener("DOMContentLoaded", function () {
  const scrollTargets = document.querySelectorAll("a[href^='#']");

  scrollTargets.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        });
      }

      // Close mobile menu if open
      const navbar = document.getElementById("navbar");
      const toggle = document.getElementById("menu-toggle");
      if (navbar && navbar.classList.contains("active")) {
        navbar.classList.remove("active");
        toggle.classList.remove("open");
      }
    });
  });

  // Footer logo → back to top
  const footerLogo = document.querySelector(".footer-logo");
  if (footerLogo) {
    footerLogo.style.cursor = "pointer";
    footerLogo.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
