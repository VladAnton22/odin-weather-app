import { GeneralForecast, FutureForecast } from "./forecast.js";
import { formatGeneralDate, formatWeekDay, formatTime } from "../utils/datetimeFormat.js"

export function createGeneralForecast(data) {
    data.currentConditions.datetime = formatTime(data.currentConditions.datetime);
    data.days[0].datetime = formatGeneralDate(data.days[0].datetime);
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
  const forecasts = [];

  for (let i = 0; i < 5; i++) {
    const day = data.days[i];
    day.datetime = formatWeekDay(day.datetime);
    day.tempmin = Math.round(day.tempmin);
    day.tempmax = Math.round(day.tempmax);

    const forecast = new FutureForecast(day);
    forecasts.push(forecast);
  }

  return forecasts;
}