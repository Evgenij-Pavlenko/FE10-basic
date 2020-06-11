let data = [
    {
        id: 1,
        name: 'a',
        email: 'aasja@fvfv.com',
        feedback: 'aasassas'
    },
    {
        id: 2,
        name: 'c',
        email: 'casja@fvfv.com',
        feedback: 'casassas'
    },
    {
        id: 3,
        name: 'b',
        email: 'basja@fvfv.com',
        feedback: 'basassas'
    }

];

let sorted = {
    order: 0, // state: 0 - not sorted, 1 - sorted ASC, -1 sorted DSC;
    field: '',
    fieldHeader: ''
};

renderFeedbackTable(data);



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

    const arrows = {
        '0': '',
        '1': '\u2193',
        '-1': '\u2191'
    };

    if (sorted.field !== '') {

        document.getElementById(sorted.field).innerHTML = sorted.fieldHeader + arrows[sorted.order];
    }

    let tbody = '';

    data.forEach(value => {
        tbody += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.email}</td><td>${value.feedback}</td><td>${value.date}</td></tr>`;
    });

    document.querySelector('table tbody').innerHTML = tbody;
}



function sort(field) {
    let sortedData = [...data];
    if (sorted.field !== '' && field !== sorted.field) {
        document.getElementById(sorted.field).innerHTML = sorted.fieldHeader;
        sorted.order = 0;
    }

    sorted.field = field;
    if (sorted.order === 0) {
        sorted.fieldHeader = document.getElementById(field).innerHTML; //как вытащить наверх?
        sortedData.sort((a, b) => {
            if (a[field] > b[field]) return 1;
            if (a[field] < b[field]) return -1;
            return 0;
        });
        sorted.order = 1;
    } else if (sorted.order === 1) {
        sortedData.sort((a, b) => {
            if (a[field] > b[field]) return -1;
            if (a[field] < b[field]) return 1;
            return 0;
        });
        sorted.order = -1;
    } else {
        sorted.order = 0;
    }

    renderFeedbackTable(sortedData);
}

document.querySelector('#name').addEventListener('click', function () {
    sort('name')

})



