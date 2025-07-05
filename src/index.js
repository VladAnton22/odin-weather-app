import { getData } from "./services/weatherApi.js"
import { displayWeather } from "./ui/renderForecast.js";
import "./styles.css";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("search-form");
    const input = document.getElementById("location-input");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const city = input.value.trim();
        if (!city) return;

        // Clear previous data
        document.getElementById("left-side").innerHTML = "";
        document.getElementById("general-details").innerHTML = "";
        document.getElementById("weekly-forecasts").innerHTML = "";

        await displayWeather(city);
    });
});