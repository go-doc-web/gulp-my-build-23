const refs = {
  openMenuBtn: document.querySelector("[data-menu-open]"),
  closeMenuBtn: document.querySelector("[data-menu-close]"),
  menu: document.querySelector("[data-menu]"),
  body: document.querySelector("body"),
};

refs.openMenuBtn.addEventListener("click", toggleModal);
refs.closeMenuBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.menu.classList.toggle("is-hidden");
  refs.body.classList.toggle("locked");
}

// // Мобильное меню бургер
// function burgerMenu() {
//   const burger = document.querySelector(".burger");
//   const menu = document.querySelector(".menu");
//   const body = document.querySelector("body");
//   burger.addEventListener("click", () => {
//     if (!menu.classList.contains("active")) {
//       menu.classList.add("active");
//       burger.classList.add("active");
//       body.classList.add("locked");
//     } else {
//       menu.classList.remove("active");
//       burger.classList.remove("active");
//       body.classList.remove("locked");
//     }
//   });
//   // Вот тут мы ставим брейкпоинт навбара
//   window.addEventListener("resize", () => {
//     if (window.innerWidth > 991.98) {
//       menu.classList.remove("active");
//       burger.classList.remove("active");
//       body.classList.remove("locked");
//     }
//   });
// }
// burgerMenu();
