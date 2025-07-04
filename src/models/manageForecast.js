import { GeneralForecast, FutureForecast } from "./forecast.js"

export let futureForecasts = [];

export function createGeneralForecast(data) {
    data.currentConditions.temp = Math.round(data.currentConditions.temp);
    data.currentConditions.feelslike = Math.round(data.currentConditions.feelslike)
    data.days[0].tempmin = Math.round(data.days[0].tempmin);
    data.days[0].tempmax = Math.round(data.days[0].tempmax);
    data.currentConditions.precipprob = Math.round(data.currentConditions.precipprob);
    data.currentConditions.windspeed = Math.round(data.currentConditions.windspeed);
    data.currentConditions.humidity = Math.round(data.currentConditions.humidity);
    return new GeneralForecast(data);
}

export function createFutureForecasts(data) {
    let i;
    for (i = 0; i < 5; i++) {
        data.days[i].tempmin = Math.round(data.days[i].tempmin);
        data.days[i].tempmax = Math.round(data.days[i].tempmax);
        const forecast = new FutureForecast(data.days[i]);
        futureForecasts.push(forecast);
    }
}