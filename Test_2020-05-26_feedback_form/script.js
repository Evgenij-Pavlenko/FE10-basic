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

let sortName = true;
let sortEmail = true;
let sortDate = true;
let sortFb = true;
let sortedFeedback;
// ----------------------Sort by name----------------------
const $name = document.getElementById('name');
$name.addEventListener('click', function (event) {
    event.preventDefault();
    if (sortName) {
        console.log("sortName= true " + sortName);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });
    } else {
        console.log("sortName= false " + sortName);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        });
    }
    sortName = !sortName;
    showFeedbacksTable(feedbacks);
});
// ----------------------Sort by Email----------------------
const $email = document.getElementById('email');
$email.addEventListener('click', function (event) {
    event.preventDefault();
    if (sortEmail) {
        console.log("sortemail= true " + sortEmail);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a.email > b.email) return 1;
            if (a.email < b.email) return -1;
            return 0;
        });
    } else {
        console.log("sortEmail= false " + sortEmail);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a.email < b.email) return 1;
            if (a.email > b.email) return -1;
            return 0;
        });
    }
    sortEmail = !sortEmail;
    showFeedbacksTable(feedbacks);
});
// ----------------------Sort by Feedback----------------------
const $feedback = document.getElementById('feedback');
$feedback.addEventListener('click', function (event) {
    event.preventDefault();
    if (sortFb) {
        console.log("sortFeedback= true " + sortFb);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a.feedback > b.feedback) return 1;
            if (a.feedback < b.feedback) return -1;
            return 0;
        });
    } else {
        console.log("sortFeedback= false " + sortFb);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a.feedback < b.feedback) return 1;
            if (a.feedback > b.feedback) return -1;
            return 0;
        });
    }
    sortFb = !sortFb;
    showFeedbacksTable(feedbacks);
});
// ----------------------Sort by Date----------------------
const $date = document.getElementById('date');
$date.addEventListener('click', function (event) {
    event.preventDefault();
    if (sortDate) {
        console.log("sortDate= true " + sortDate);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a.currentDate > b.currentDate) return 1;
            if (a.currentDate < b.currentDate) return -1;
            return 0;
        });
    } else {
        console.log("sortDate= false " + sortDate);
        sortedFeedback = feedbacks.sort(function (a, b) {
            if (a.currentDate < b.currentDate) return 1;
            if (a.currentDate > b.currentDate) return -1;
            return 0;
        });
    }
    sortDate = !sortDate;
    showFeedbacksTable(feedbacks);
});