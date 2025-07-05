import { format, parse } from "date-fns";

export function formatGeneralDate(datetime) {
    const date = new Date(datetime);
    const weatherDate = format(date, "EEEE, MMMM d yyyy");
    return weatherDate
}

export function formatWeekDay(datetime) {
    const date = new Date(datetime);
    const weekDay = format(date, "EE");
    return weekDay
}

export function formatTime(datetime) {
    const parsed = parse(datetime, "HH:mm:ss", new Date());
    const formatted = format(parsed, "h:mm a");
    return formatted
}