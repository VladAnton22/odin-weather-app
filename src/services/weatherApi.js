export async function getData() {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=BXBZLJM5SNLSZF5PXVAFB8ARM", {mode: 'cors'})
    response.json().then(function(response) {
        console.log(response);
    })
}