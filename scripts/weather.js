const weatherIcon = document.querySelector("#weather-icon");
const currentTemp = document.querySelector("#current-temp");
const description = document.querySelector("#weather-description");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=50.7492444720628&lon=3.183425406138497&units=metric&appid=816b2ff51da9ecf6bf4b40e10a7bcd5f";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    //icon
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    weatherIcon.setAttribute("alt", data.weather[0].description);

    //temp
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;

    //description
    description.innerHTML = data.weather[0].description;
}

apiFetch();