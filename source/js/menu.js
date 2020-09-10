var menuLink = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--display");

menuLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.toggle("main-nav--display");
  });
