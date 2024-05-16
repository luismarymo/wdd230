// visitor count
const visits = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits;
} else {
    visits.textContent = "This is your first visit!"
}

numVisits++;
localStorage.setItem("numVisits", numVisits);