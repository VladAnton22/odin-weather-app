import { createGeneralForecast } from "../models/manageForecast.js";

export async function getData() {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=BXBZLJM5SNLSZF5PXVAFB8ARM", {mode: 'cors'})
    response.json().then(function(response) {
        const forecast = createGeneralForecast(response);
        console.log(forecast);
    })
}