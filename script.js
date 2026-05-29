const apiKey = "48174ef46d98cf149de2eebb801c2f77";
 const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=germany"; 
 async function checkWeather() {
    const response = await fetch(`${apiUrl}&appid=${apiKey}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}
checkWeather();