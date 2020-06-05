function showFeedbacksTable(feedbacks = []) {

    let innerHtmlTableBody = '';

    for (let i = 0; i < feedbacks.length; i++) {
        innerHtmlTableBody += '<tr><td>' + (i + 1) + '</td><td>' + feedbacks[i].name + '</td><td>' + feedbacks[i].email
            + '</td><td>' + feedbacks[i].feedback + '</td><td>' + feedbacks[i].currentDate + '</td></tr>';

    }
    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
    // document.getElementById('count').style.display = "block";
    let $tfoot = document.querySelector('tfoot div.alert');
    $tfoot.style.display = "block";
    $tfoot.innerHTML = 'Total number of records: <b>' + feedbacks.length + '</b>';


}

let feedbacks = [];

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function (event) {
    event.preventDefault();

    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();

    date = dd + '.' + mm + '.' + yyyy;

    let feedback = {};
    feedback.name = document.querySelector('input[name=name]').value;
    feedback.email = document.querySelector('input[name=email]').value;
    feedback.feedback = document.querySelector('textarea[name=feedback]').value;
    feedback.currentDate = date;

    feedbacks.push(feedback);

    showFeedbacksTable(feedbacks);
})

let sortTrueFalse = true;
// ----------------------Sort by name----------------------
const $name = document.getElementById('name');
$name.addEventListener('click', function (event) {
    event.preventDefault();
    sortall('name'); // name передает
});

// ----------------------Sort by Email----------------------

const $email = document.getElementById('email');
$email.addEventListener('click', function (event) {
    event.preventDefault();
    sortall('email');
});

// ----------------------Sort by Feedback----------------------
const $feedback = document.getElementById('feedback');
$feedback.addEventListener('click', function (event) {
    event.preventDefault();
    sortall('feedback');
});

// ----------------------Sort by Date----------------------
const $date = document.getElementById('date');
$date.addEventListener('click', function (event) {
    event.preventDefault();
    sortall('date');
});

//----------------Обобщенный вариант--------------------
function sortall(param) {
    console.log(param);
    //в зависимости от переданного параметра - сортирует по указанному полю
    switch (param) {
        case name:
            param = 0;
            break;
        case email:
            param = 1;
            break;
        case feedback:
            param = 2;
            break;
        case date:
            param = 3;
            break;
        default: // почему это в любом случае выводится в консоль?
            console.log("error");
            break;
    }

    if (sortTrueFalse) {
        console.log("sortTrueFalse= true " + sortTrueFalse);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a[param] > b[param]) return 1;
            if (a[param] < b[param]) return -1;
            return 0;
        });
    } else {
        console.log("sortTrueFalse= false " + sortTrueFalse);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a[param] < b[param]) return 1;
            if (a[param] > b[param]) return -1;
            return 0;
        });
    }
    sortTrueFalse = !sortTrueFalse;
    showFeedbacksTable(feedbacks);
}