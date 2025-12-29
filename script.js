// BACK BUTTON
document.getElementById("backBtn").onclick = () => {
  location.href = "#home";
};

// ACTIVE NAV LINK
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-center a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (scrollY >= top) current = section.id;
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});

// FADE IN
const faders = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});
faders.forEach(el => observer.observe(el));

// LANGUAGE
const translations = {
  en: {
    portfolio: "Portfolio",
    cv: "Resume",
    contact: "Contact",
    slogan: "Industrial design & visual thinking",
    about: "Designer with a minimal, technical and human approach.",
    education: "Education",
    download: "Download CV (PDF)"
  },
  es: {
    portfolio: "Portfolio",
    cv: "CV",
    contact: "Contacto",
    slogan: "Diseño industrial y pensamiento visual",
    about: "Diseñador con enfoque minimalista, técnico y humano.",
    education: "Formación",
    download: "Descargar CV en PDF"
  }
};

document.querySelectorAll(".lang").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".lang").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const lang = btn.dataset.lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = translations[lang][el.dataset.i18n];
    });
  };
});
