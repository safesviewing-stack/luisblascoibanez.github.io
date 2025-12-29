const sections = document.querySelectorAll(".section");
const navButtons = document.querySelectorAll(".nav-center button");
const backBtn = document.getElementById("backBtn");

function showSection(id) {
  sections.forEach(section => {
    section.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");
}

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    showSection(btn.dataset.section);
  });
});

backBtn.addEventListener("click", () => {
  showSection("home");
});
