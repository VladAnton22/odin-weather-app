import { createGeneralForecast, createFutureForecasts } from "../models/manageForecast.js";

export async function getForecastData(city, unitGroup = "metric") {
  const error = document.getElementById("error")
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unitGroup}&key=BXBZLJM5SNLSZF5PXVAFB8ARM`, {
    mode: "cors",
  });
  if (response.status !== 200) {
    error.innerHTML = "City not found!";
    return null;
  } else {
    const data = await response.json();
    const generalForecast = createGeneralForecast(data);
    const futureForecasts = createFutureForecasts(data);

    return { generalForecast, futureForecasts };
  }
}