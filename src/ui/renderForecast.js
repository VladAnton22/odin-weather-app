import { getForecastData } from "../services/weatherApi.js";
import icons from "../utils/iconLoader.js";

export async function displayWeather(city) {
    const { generalForecast, futureForecasts } = await getForecastData(city);

    renderGeneralForecast(generalForecast);
    renderGeneralDetails(generalForecast);
    renderFutureForecasts(futureForecasts);
}


function getWeatherIcon(iconName) {
  return icons[iconName] || icons["default"];
}

function renderGeneralForecast(forecast) {
    const generalForecastContainer = document.getElementById("left-side");
    generalForecastContainer.className = "flex flex-col justify-between bg-gradient-to-t from-primary to-primary-light rounded-lg p-4";
    const location = document.createElement("h2");
    location.textContent = forecast.location.address;
    location.className = "text-xl font-semibold font-heading";

    const date = document.createElement("p");
    date.textContent = forecast.location.date;
    date.className = "text-md text-blue-200";

    const time = document.createElement("p");
    time.textContent = forecast.location.time;
    time.className = "text-md text-blue-200";

    const description = document.createElement("p");
    description.textContent = forecast.summary.description;
    description.className = "text-lg text-blue-200 mt-4";

    const topDetailsContainer = document.createElement("div");

    const dateTimeContainer = document.createElement("div");
    dateTimeContainer.className = "flex items-center justify-between"

    dateTimeContainer.append(date, time);
    topDetailsContainer.append(location, dateTimeContainer, description)

    const temp = document.createElement("p");
    temp.textContent = `${forecast.temperature.current}°C`;
    temp.className = "text-4xl font-bold";

    const minMaxTemp = document.createElement("p");
    minMaxTemp.textContent = `${forecast.temperature.min}°C/${forecast.temperature.max}°C`;
    minMaxTemp.className = "text-md text-blue-200 text-center";

    const icon = document.createElement("img");
    icon.src = getWeatherIcon(forecast.summary.icon);
    icon.className = "w-30"

    const tempContainer = document.createElement("div");
    const bottomDetailsContainer = document.createElement("div");
    bottomDetailsContainer.className = "flex items-center justify-between";

    tempContainer.append(temp, minMaxTemp);
    bottomDetailsContainer.append(tempContainer, icon);

    generalForecastContainer.append(topDetailsContainer, bottomDetailsContainer);
}

function createDetailRow(labelText, valueText) {
    const container = document.createElement("div");
    container.className = "flex items-center justify-between p-2 m-2 border-b border-b-primary-dark";

    const label = document.createElement("p");
    label.textContent = labelText;
    label.className = "text-lg text-blue-200 font-semibold";

    const value = document.createElement("p");
    value.textContent = valueText;
    value.className = "text-lg text-neutral-200";

    container.append(label, value);
    return container;
}

function renderGeneralDetails(forecast) {
    const rightSide = document.getElementById("right-side")
    rightSide.className = "bg-neutral-dark p-4 rounded-lg"
    const container = document.getElementById("general-details");
    container.innerHTML = ""; // Clear previous

    const heading = document.createElement("h2");
    heading.textContent = "Today's weather details";
    heading.className = "text-lg font-semibold font-heading mb-4";
    container.appendChild(heading);

    container.appendChild(createDetailRow("Feels Like", `${forecast.temperature.feelsLike}°C`));
    container.appendChild(createDetailRow("Rain Probability", `${forecast.weatherDetails.rainProbability}%`));
    container.appendChild(createDetailRow("Wind Speed", `${forecast.weatherDetails.windSpeed}km/h`));
    container.appendChild(createDetailRow("Humidity", `${forecast.weatherDetails.humidity}%`));
}


function renderFutureForecasts(forecasts) {
    const bottomSide = document.getElementById("bottom-side");
    bottomSide.className = "bg-neutral-dark p-4 rounded-lg";
    const container = document.getElementById("weekly-forecasts");
    container.innerHTML = "";
    const heading = document.createElement("h2");
    heading.textContent = "Forecast for the next 5 days";
    heading.className = "text-lg font-semibold font-heading col-span-5 mb-4";
    container.appendChild(heading);

    for (let forecast of forecasts) {
        const dayContainer = document.createElement("div");

        const day = document.createElement("h2");
        day.textContent = forecast.date;
        day.className = "text-lg text-blue-200 font-semibold";

        const icon = document.createElement("img");
        icon.src = getWeatherIcon(forecast.icon);
        icon.className = "w-16 mx-auto my-3";

        const temp = document.createElement("p");
        temp.textContent = `${forecast.tempMin}°C/${forecast.tempMax}°C`;
        temp.className = "text-md";

        dayContainer.append(day, icon, temp);
        container.append(dayContainer);
    }
}
