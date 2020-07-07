const URL = 'http://api.openweathermap.org/data/2.5/weather';
const APPID = 'bed156d40174100c73406417523ddaf1';

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const country = event.target['country'].value;
    const city = event.target['city'].value;

    fetch(`${URL}?country=${country}&q=${city}&APPID=${APPID}`)
    .then(responce => responce.json())
    // .then(text => console.log(text))
    .then(json => )
    .then(text => {
        console.log(text);
        event.target.nextElementSibling.innerHTML = "test";
        event.target.nextElementSibling.innerHTML = `<div>${text}</div>`})

})

function showWeather(json){

}