// ── NAVBAR scroll ──
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
});

// ── HAMBURGER ──
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});

// ── ACTIVE NAV LINK ──
const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {
  const scrollY = window.scrollY + 80;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      link.classList.toggle("active", scrollY >= top && scrollY < top + height);
    }
  });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();

// ── REVEAL ON SCROLL ──
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("visible");
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));

// ── CONTATO FORM → WHATSAPP ──
const form = document.getElementById("contatoForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome     = document.getElementById("nome").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  const texto = `Olá, Pedro! Me chamo *${nome}*.\n\n${mensagem}`;
  const url   = `https://wa.me/5581992064982?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
  form.reset();
});
