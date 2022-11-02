
const dropdownButton = document.querySelector(".menu-icon");
const dropdownList = document.querySelector("nav ul");

dropdownButton.addEventListener("click", function () {
dropdownList.classList.toggle("show-dropdown");
});