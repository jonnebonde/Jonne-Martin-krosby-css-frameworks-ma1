
// According to design the hamburgericon is not shown when the menu is active

const hamburgerMenuToggler = document.querySelector(".navbar-toggler");
const hamburgerMenuIcon = document.querySelector(".navbar-toggler-icon");
const hideShowHamburgerMenu = document.querySelector(".hidden");

hamburgerMenuToggler.addEventListener("click", () => {
  hamburgerMenuIcon.classList.toggle("hidden")
})  


