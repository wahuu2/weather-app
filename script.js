const apiKey = "48174ef46d98cf149de2eebb801c2f77";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        // Update text values
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        // Reset card class to base before applying weather theme
        card.className = "card";

        // Update icon + background theme
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            card.classList.add("clouds");
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
            card.classList.add("clear");
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
            card.classList.add("rain");
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
            card.classList.add("drizzle");
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
            card.classList.add("mist");
        }

        // Show weather card, hide error
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        // Trigger fade-in for icon
        weatherIcon.classList.add("show");
    }
}

// Search button click
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
document.querySelector(".weather").classList.add("show");

// Optional: allow pressing Enter in the input
searchBox.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchBox.value);
    }
});
