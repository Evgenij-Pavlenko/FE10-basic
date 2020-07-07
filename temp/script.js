
function getWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=2ad17aaec16633bdb4e812b03aa26b18')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(data => function () {
            return document.getElementByName('weather-data').innerHTML = data ;
        }())
}
// /function getWeather() {
// let country = document.getElementsByTagName('country').value;
// let city = document.getElementsByTagName('city').value;
// let appId = '2ad17aaec16633bdb4e812b03aa26b18'
// fetch('https://api.openweathermap.org/data/2.5/weather?country=' + country + 'city=' + city + 'appId=' + appId)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .then(data => function () {
//         document.getElementsByTagName('weather-data').innerHTML = data;
//     })
// }
