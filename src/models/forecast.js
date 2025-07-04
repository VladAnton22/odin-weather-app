export class GeneralForecast {
    constructor(data) {
        const current = data.currentConditions ?? {};
        const day = data.days?.[0] ?? {};

        this.location = {
            address: data.resolvedAddress,
            timezone: data.timezone,
            datetimeEpoch: current.datetimeEpoch,
        };

        this.summary = {
            description: day.description,
            icon: current.icon,
        };

        this.temperature = {
            current: current.temp,
            feelsLike: current.feelslike,
            min: day.tempmin,
            max: day.tempmax,
        };

        this.weatherDetails = {
            rainProbability: current.precipprob,
            windSpeed: current.windspeed,
            humidity: current.humidity,
        };
    }
}

export class futureForecast {
    constructor(day) {
        this.date = day.datetime;
        this.icon = day.icon;
        this.tempMin = day.tempMin;
        this.tempMax = day.tempMax;
    }
}
