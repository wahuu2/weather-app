# 🌦️ Weather App

A simple and responsive weather application built with **HTML, CSS, and JavaScript**.  
It fetches real‑time weather data from the [OpenWeatherMap API](https://openweathermap.org/api) and displays temperature, humidity, wind speed, and weather conditions with dynamic icons and background themes.

---

## ✨ Features
- 🔍 **Search by city name** to get live weather data
- 🌡️ Displays **temperature in °C**
- 💧 Shows **humidity percentage**
- 🌬️ Displays **wind speed in km/h**
- 🎨 Dynamic **background gradients** based on weather conditions (Clear, Clouds, Rain, Drizzle, Mist)
- 🖼️ Weather icons update automatically
- ⚠️ Error handling for invalid city names

---

## 🛠 Tech Stack
- **HTML5** – structure
- **CSS3** – styling, gradients, transitions
- **JavaScript (ES6)** – logic, API calls, DOM manipulation
- **OpenWeatherMap API** – weather data source

---

## The URL I've deployed it on Vercel
https://weather-app-eight-rho-erhw6wlmfi.vercel.app/

---

## 📂 Project Structure
```
weather-app/
├── index.html        # Main HTML file
├── styles.css        # Styling and weather themes
├── script.js         # JavaScript logic
└── images/           # Weather icons (clear, rain, clouds, drizzle, mist, search, humidity, wind)
```

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Add your API key
Open `script.js` and replace the placeholder with your own OpenWeatherMap API key:
```js
const apiKey = "YOUR_API_KEY_HERE";
```

### 3. Run the app
Simply open `index.html` in your browser.

---

## 📸 Screenshots
- Default card with search bar
- Weather display with dynamic background
- Error message for invalid city

---

## 📜 License
Distributed under the MIT License. See `LICENSE` for more information.

---

## 🙏 Acknowledgements
- [OpenWeatherMap](https://openweathermap.org/)
- Inspiration from modern weather UI designs
