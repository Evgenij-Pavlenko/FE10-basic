
const configJson = "./config.json";
let myJson = {};

fetch(configJson)
    .then(response => response.text())
    .then(text => jsonAdapter(text));


function jsonAdapter(text) {  //не получилось вытянуть myJson наружу - приходится оставаться в этой функции
    myJson = JSON.parse(text);

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        const country = event.target['country'].value;
        const city = event.target['city'].value;

        // units=metric - temp -> in Celsius
        fetch(`${myJson.URL}?country=${country}&q=${city}&APPID=${myJson.APPID}&units=metric`)
            .then(response => response.json())
            .then(json => showWeather(json, event.target));
    })

    function showWeather(json, target) {
        const titleElement$ = target.nextElementSibling.querySelector('h5.card-title');
        titleElement$.innerText = `Weather for ${json.name}`;

        let html = '';
        myJson.weatherFieldConig.forEach((el => {
            html += '<div class="row">';
            html += `<div class="col-6">${el.name}</div><div class="col-6">${eval('json.' + el.field)}</div>`
            html += '</div>';
        }))

        titleElement$.nextElementSibling.innerHTML = html;
    }
}