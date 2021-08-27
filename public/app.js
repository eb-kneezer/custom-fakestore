const navLinks = document.querySelectorAll(".link");
const openNav = document.querySelector(".nav-open");
const sideNav = document.querySelector(".sidebar-container");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    let current = document.getElementsByClassName("active-link");
    current[0].className = current[0].className.replace(" active-link", "");
    link.className += " active-link";
  });
});

openNav.addEventListener("click", () => {
  if (sideNav.classList.contains("active")) {
    sideNav.classList.remove("active");
    openNav.textContent = "Menu";
    return;
  }
  sideNav.classList.add("active");
  openNav.textContent = "Close Menu";
});

sideNav.addEventListener("click", () => {
  openNav.textContent = "Menu";
  sideNav.classList.remove("active");
});
