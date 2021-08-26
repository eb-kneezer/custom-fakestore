const navLinks = document.querySelectorAll(".link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    // console.log("object");
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    link.className += " active";
  });
});
