
fetch('/weather-fetch/config.json')
    .then(response => response.json())
    .then(config => {
        // console.log(config);
        document.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault();
            const country = event.target['country'].value;
            const city = event.target['city'].value;
            const units1 = document.querySelector('input[name="unitsRadios"]:checked').value;

            // через  target - не получилось((
            // неправильно выборку элемента делаю??
            // const units = event.target['input[name="unitsRadios"]:checked'].value;
            // const units = event.target['unitsRadios:checked'].value;

            fetch(`${config.URL}?q=${city},${country}&APPID=${config.APPID}&units=${units1}`)
                .then(response => response.json())
                .then(json => showWeather(json, event.target, config, units1));
        })

    })
    .catch(error => console.log(error));

// как-то много параметров передается (4).
// Лучше будет units1 - как let первой строкой js объявить?
// все равно - как- то не очень.
// А если для разных языков? не писать же эти параметры вручную...
function showWeather(json, target, config, units1) {

    console.log(json);
    console.log(config);
    const titleElement$ = target.nextElementSibling.querySelector('h5.card-title');
    titleElement$.innerText = `Weather for ${json.name}`;

    let html = '';
    config.weatherFieldConig.forEach((el => {
        html += '<div class="row">';
        html += `<div class="col-6">${el.name}</div><div class="col-6">${eval('json.' + el.field)}, ${eval('el.units.' + units1)}</div>`
        html += '</div>';
    }))

    titleElement$.nextElementSibling.innerHTML = html;
}