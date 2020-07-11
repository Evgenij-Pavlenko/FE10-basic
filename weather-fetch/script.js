
fetch('/weather-fetch/config.json')
    .then(response => response.json())
    .then(config => {
        // console.log(config);
        document.querySelector('form').addEventListener('submit', function (event) {
            event.preventDefault();
            const country = event.target['country'].value;
            const city = event.target['city'].value;
            // const units = document.querySelector('input[name="unitsRadios"]:checked').value;

            // через  target - не получилось((
            // неправильно выборку элемента делаю??
            // const units = event.target['input[name="unitsRadios"]:checked'].value;
            // const units = event.target['unitsRadios:checked'].value;

            fetch(`${config.URL}?country=${country}&q=${city}&APPID=${config.APPID}&units=${units}`)
                .then(response => response.json())
                .then(json => showWeather(json, event.target, config));
        })

    })
    .catch(error => console.log(error));

function showWeather(json, target, config) {

    console.log(json);
    console.log(config);
    const titleElement$ = target.nextElementSibling.querySelector('h5.card-title');
    titleElement$.innerText = `Weather for ${json.name}`;

    let html = '';
    config.weatherFieldConig.forEach((el => {
        html += '<div class="row">';
        html += `<div class="col-6">${el.name}</div><div class="col-6">${eval('json.' + el.field)}</div>`
        html += '</div>';
    }))

    titleElement$.nextElementSibling.innerHTML = html;
}