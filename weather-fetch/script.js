/*
Clone (copy) weather project into weather-fetch project
Modify weather-fetch project using fetch API to show
weather results for city in City field below the form.
*/
let city;
let appId;
let $out = document.querySelector('form').nextElementSibling;


document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    printBelow();
})

function printBelow(event) {
    city = document.querySelector('form input[name=q]').value;
    appId = document.querySelector('form input[name=APPID]').value;

    // или APPID сразу в js вписать?
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + appId)
        .then(response => response.text())
        .then(text => $out.innerHTML = text);

        //почему нельзя тут catch?
        // .catch(() => $out.innerHTML = "Error...");
}
