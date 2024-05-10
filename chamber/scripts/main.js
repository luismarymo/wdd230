// footer - copyright year and date of modification
const year = document.querySelector("#year");
document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

// responsive menu
const navButton = document.querySelector("#nav-button");
const navElement = document.querySelector("nav");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("open");
    navElement.classList.toggle("open");
});

//last visit
const visitMsg = document.querySelector("#visitMsg");
let todayDate = new Date();

let visits = Number(localStorage.getItem("visits")) || 0;
let lastVisit = Number(localStorage.getItem("lastVisit")) || Date.now();

if (visits !== 0) {
    let betweenVisits = Date.now() - lastVisit;
    let visitsDays = Math.floor(betweenVisits / 84600000);

    if (visitsDays === 0) {
        visitMsg.textContent = "Back so soon! Awesome!";
    } else if (visitsDays === 1) {
        visitMsg.textContent = "You last visited 1 day ago";
    } else {
        visitMsg.textContent = `You last visited ${visitsDays} days ago`;
    }
} else {
    visitMsg.textContent = "Welcome! Let us know if you have any questions.";
}

visits++;

localStorage.setItem("visits", visits);
localStorage.setItem("lastVisit", Date.now());