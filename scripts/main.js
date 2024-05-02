// hamburger navigation
const navButton = document.querySelector(".nav-button");
const navElement = document.querySelector("nav");

navButton.addEventListener("click", () => {
    navElement.classList.toggle("open");
    navButton.classList.toggle("open");
});

// dark mode 
const main = document.querySelector("main")
const darkMode = document.querySelector("#mode");

darkMode.addEventListener("click", () => {
    main.classList.toggle("dark");
})