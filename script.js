// ===== Typing Effect =====
const typingText = document.getElementById("typing-text");
const words = ["Web & Mobile Developer ", "Database Designer ", "System Analyst "];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const currentText = isDeleting
    ? currentWord.substring(0, charIndex--)
    : currentWord.substring(0, charIndex++);

  typingText.textContent = currentText;

  // Kecepatan mengetik
  let typingSpeed = isDeleting ? 60 : 120;

  // Jika kata selesai diketik
  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    typingSpeed = 1200; // jeda sebelum hapus
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // lanjut ke kata berikutnya
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
// Toggle menu on mobile
const toggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  toggle.classList.toggle('open');
});

// ===== Smooth Scroll =====
const navLinksSmooth = document.querySelectorAll(".navbar a[href^='#']");

navLinksSmooth.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // hentikan default jump
    const targetId = this.getAttribute("href").substring(1); // hapus '#'
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // jarak dari navbar
        behavior: "smooth" // scroll halus
      });
    }

    // tutup menu mobile jika terbuka
    if (navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      toggle.classList.remove("open");
    }
  });
});
// ===== Smooth Scroll untuk Navbar dan Footer =====
const scrollLinks = document.querySelectorAll("a[href^='#'], .footer-logo");

scrollLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    let targetId = this.getAttribute("href");
    
    // Jika klik logo footer
    if (this.classList.contains("footer-logo")) {
      targetId = "#home"; // arahkan logo ke home
    }

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // sesuaikan jarak navbar
        behavior: "smooth"
      });
    }

    // Tutup menu mobile jika terbuka
    const navbar = document.getElementById("navbar");
    const toggle = document.getElementById("menu-toggle");
    if (navbar && navbar.classList.contains("active")) {
      navbar.classList.remove("active");
      toggle.classList.remove("open");
    }
  });
});
