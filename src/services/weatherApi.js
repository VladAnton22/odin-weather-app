import { createGeneralForecast, createFutureForecasts, futureForecasts } from "../models/manageForecast.js";

export async function getData() {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=BXBZLJM5SNLSZF5PXVAFB8ARM", {mode: 'cors'})
    response.json().then(function(response) {
        const generalForecast = createGeneralForecast(response);
        console.log(generalForecast);
        createFutureForecasts(response);
        console.log(futureForecasts);
    })
}