import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

// const nav = document.querySelector(".nav");
// const navItems = document.querySelectorAll(".nav-item");
// const navImgs = document.querySelectorAll(".nav-item-img");

// document.querySelectorAll("a").forEach((el) => {
//   //防止瀏覽器在同一頁面觸發跳轉
//   el.addEventListener("click", function (e) {
//     if (el.href === window.location.href) {
//       e.preventDefault();
//     }
//   });
// });

// nav.addEventListener("click", function (e) {
//   //導覽列icon切換
//   navImgs.forEach((el) => (el.className = el.className.replace("-on", "-off")));
//   navItems.forEach((el) => el.classList.remove("bg-callout", "rounded-pill"));

//   const navItem = e.target.closest(".nav-item");
//   if (!navItem) return;
//   const navImg = navItem.querySelector(".nav-item-img");

//   navImg.className = navImg.className.replace("-off", "-on");
//   navItem.classList.add("bg-callout", "rounded-pill");
// });
