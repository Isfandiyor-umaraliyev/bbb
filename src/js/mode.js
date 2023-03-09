// const checkbox = document.getElementById("checkbox");
// const font = document.getElementById("font");
// const modeLocal = localStorage.getItem("mode");

// checkbox.addEventListener("change", () => {
//     localStorage.setItem("mode", "dark");
//     if (modeLocal) {
//         document.body.classList.toggle(modeLocal);
// font.classList.toggle(modeLocal);
//     } else {
//         localStorage.getItem("mode", "");

//     }
// });

const body = document.querySelector("body");
const darkBtn = document.querySelector(".header__dark-mode");
const lightBtn = document.querySelector(".header__light-mode");
const modeLocal = localStorage.getItem("mode");
if (modeLocal) {
  body.classList.add("dark");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  font.classList.toggle("dark");
}
const toggleModeBtn = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark");
  font.classList.toggle("dark");
};

darkBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "dark");
});

lightBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "");
});
