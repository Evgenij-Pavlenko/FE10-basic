function showFeedbacksTable(feedbacks = []) {

    let innerHtmlTableBody = '';

    for (let i = 0; i < feedbacks.length; i++) {
        innerHtmlTableBody += '<tr><td>' + (i + 1) + '</td><td>' + feedbacks[i].name + '</td><td>' + feedbacks[i].email
            + '</td><td>' + feedbacks[i].feedback + '</td><td>' + feedbacks[i].currentDate + '</td></tr>';

    }
    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
    document.getElementById('count').style.display = "block";
    document.querySelector('tfoot div.alert').innerHTML = 'Total number of records: <b>' + feedbacks.length + '</b>';


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