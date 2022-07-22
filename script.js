const displayMenu = document.querySelector("#menu__toggle"),
  menu = document.querySelector("#left__routes"),
  button = document.querySelector(".Hamburgerbutton");

displayMenu.addEventListener("click", () => {
  button.classList.toggle("open");
  menu.classList.toggle("active");
});
