let data = [
    {
        id: 1,
        name: 'a',
        email: 'c@gmail.com',
    },
    {
        id: 2,
        name: 'c',
        email: 'a@gmail.com'
    },
    {
        id: 3,
        name: 'b',
        email: 'b@gmail.com'
    },
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
    // let nodesList = document.querySelectorAll('th');
    // for (let i = 0; i < nodesList.length; i++) {
    //     nodesList[i].classList.remove('arrow_down');
    //     nodesList[i].classList.remove('arrow_up');
    // }

    document.querySelectorAll('th').forEach((element => {
        element.classList.remove('arrow_down');
        element.classList.remove('arrow_up');
    }));

    const elements = document.querySelectorAll('th');
    for (x in elements) {
        console.log(x)
    }

    for (x of elements) {
        console.log(x)
    }

    const classes = {
        '1': 'arrow_down',
        '-1': 'arrow_up'
    }

    if (sorted.order) {
        document.getElementById(sorted.field).classList.add(classes[sorted.order]);
    }

    let tbody = '';
    data.forEach(value => {
        tbody += `<tr><td>${value.id}</td><td>${value.name}</td><td>${value.email}</td><td>${value.feedback}</td><td>${value.date}</td></tr>`;
    });

    document.querySelector('table tbody').innerHTML = tbody;
}
const asc = (field) => {
    return (a, b) => {
        if (a[field] > b[field]) return 1;
        if (a[field] < b[field]) return -1;
        return 0;
    }
};

const desc = (field) => {
    return (a, b) => {
        if (a[field] > b[field]) return -1;
        if (a[field] < b[field]) return 1;
        return 0;
    }
}
function sort(field) {
    let sortedData = [...data];

    if (sorted.field && field !== sorted.field) {
        sorted.order = 0;
    }

    sorted.field = field;
    if (sorted.order === 0) {
        sortedData.sort(acs);
        sorted.order = 1;
    } else if (sorted.order === 1) {
        sortedData.sort(desc(field));
        sorted.order = -1;
    } else {
        sorted.order = 0;
    }

    renderFeedbackTable(sortedData);
}

document.querySelector('#name').addEventListener('click', function () {
    sort('name');
})
//тестовое задание - через функцию
function funct(x) {
    return (a) => {
        return a * x;
    };
};
//осознание...
function funct(x) {
    let abc = (a) => {
        return a * x;
    };
    return abc;
};
//тестовое задание 2 - через переменную-функцию
const funct2 = (x) => {
    return (a) => {
        return x = a * x;
    };
};