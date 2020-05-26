function showUsersTable(persons = []) {

    let innerHtmlTableBody = '';

    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + (i + 1) + '</td><td>' + persons[i].name + '</td><td>' + persons[i].email
            + '</td><td>' + persons[i].feedback + '</td><td>' + persons[i].currentDate + '</td></tr>';

    }
    document.getElementById('count').innerHTML = "Total number of records: " + persons.length;
    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;


}

let persons = [];

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function (event) {
    event.preventDefault();

    let person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.email = document.querySelector('input[name=email]').value;
    person.feedback = document.querySelector('textarea[name=feedback]').value;
    person.currentDate =

        persons.push(person);

    showUsersTable(persons);
})