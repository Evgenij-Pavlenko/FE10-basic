let data = [
    {
        id: 1,
        name: 'Vasya',
        email: 'vasja@dc.com',
        feedback: 'vasjafhfhfhfh fhfhff',
        date: new Date(2020, 1, 20 + 2).toLocaleString()

    },
    {
        id: 2,
        name: 'John',
        email: 'john@fvfv.com',
        feedback: 'johndccdcdc cdcc cdccd',
        date: new Date().toLocaleString()
    },
    {
        id: 3,
        name: 'Petya',
        email: 'petja@eded.com',
        feedback: 'petjasxsxsxd',
        date: new Date(2020, 1, 20).toLocaleString()
    },
];

renderFeedbackTable(data);

let sortedBy = 0; // state: 0 - not sorted, 1 - sorted ASC, -1 sorted DSC;

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    let feedback = {};

    // Extract data from form
    feedback.id = data.length + 1;
    feedback.name = document.querySelector('form input[name=name]').value;
    feedback.email = document.querySelector('form input[name=email]').value;
    feedback.feedback = document.querySelector('form textarea[name=feedback]').value;

    // Saving current date
    const date = new Date();
    feedback.date = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

    // Adding new feedback object to the data array
    data.push(feedback);

    event.target.reset();

    // Drawing table body
    renderFeedbackTable(data);
})

function renderFeedbackTable(data) {
    let tbody = '';

    data.forEach(value => {
        tbody += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.email}</td><td>${value.feedback}</td><td>${value.date}</td></tr>`;
    });

    document.querySelector('table tbody').innerHTML = tbody;
}
function sort(param) {
    let sortedData = [...data];
    console.log(param)
    const valueTHeader =  document.getElementById([param]).innerHTML;// не понимаю, как неизменять этот элемент, чтобы не добавлялось миллион стрелочек
    // с изменением свойства ::after -  былобы проще, т.к. основной элемент не меняется
    //получилось только, когда id = с большой буквы
    let $up = valueTHeader + '&uArr;';
    let $down = valueTHeader + '&dArr;';
    if (sortedBy === 0) {
        sortedData.sort((a, b) => {
            document.getElementById(param).innerHTML =  $up; //arrow up //in ::after => '--content' - don't worked((
            if (a[param] > b[param]) return 1;
            if (a[param] < b[param]) return -1;
            return 0;
        });
        sortedBy = 1;
    } else if (sortedBy === 1) {
        sortedData.sort((a, b) => {
            document.getElementById(param).innerHTML = $down; // Arrow down ' &dArr; '
            if (a[param] > b[param]) return -1;
            if (a[param] < b[param]) return 1;
            return 0;
        });
        sortedBy = -1;
    } else {
        //обнуляет название колонки.
        //работает, но похоже на говнокод(
        document.getElementById(param).innerHTML = param;
        sortedBy = 0;
    }

    renderFeedbackTable(sortedData);
}



