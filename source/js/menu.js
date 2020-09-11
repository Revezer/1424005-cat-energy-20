var menuLink = document.querySelector(".page-header__toggle");
var menu = document.querySelector(".main-nav");

menu.classList.remove("main-nav--display");
menuLink.classList.remove("page-header__toggle--display")

menuLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.toggle("main-nav--display");
  });

menuLink.classList.remove("page-header__toggle--cross");

menuLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    menuLink.classList.toggle("page-header__toggle--cross")
    menuLink.classList.toggle("page-header__toggle")
  });
