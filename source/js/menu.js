var menuLink = document.querySelector(".main-nav");
var Menu = document.querySelector(".site-list");

Menu.classList.remove("main-nav--display");

menuLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    Menu.classList.toggle("main-nav--display");
  });
