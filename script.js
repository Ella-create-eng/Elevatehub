// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

const menuToggle = document.getElementById("menuToggle");
const headerLeft = document.querySelector(".header-left");

menuToggle.addEventListener("click", () => {
  headerLeft.classList.toggle("active");   // toggle left-side menu
  menuToggle.classList.toggle("active");   // animate hamburger -> X
});

document.addEventListener("click", (e) => {
  const isClickInsideMenu = headerLeft.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (!isClickInsideMenu && !isClickOnToggle) {
    headerLeft.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});









