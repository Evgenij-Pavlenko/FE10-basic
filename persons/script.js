function showUsersTable(persons = []) {
    console.log(persons);
    const sortedPersons = persons.sort(function (a, b) {
        return a.age - b.age;
    });

    let averageAge = 0;
    let maxAge = persons[0].age;
    let minAge = persons[0].age;
    let innerHtmlTableBody = '';
    if (persons.length > 1) {
        for (let i = 0; i < persons.length; i++) {
            innerHtmlTableBody += '<tr><td>' + sortedPersons[i].name + '</td><td>' + sortedPersons[i].age + '</td></tr>';
            console.log('Person ' + (i + 1) + ': name = ' + sortedPersons[i].name + ' age = ' + sortedPersons[i].age);
            averageAge += + sortedPersons[i].age;
            if (persons[i].age > maxAge) {
                maxAge = persons[i];
            }
            if (persons[i].age < minAge) {
                minAge = persons[i];
            }
        }
    }
    averageAge /= persons.length;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;

    console.log('Average age of person:' + averageAge);
    document.querySelector('tfoot div.alert').innerHTML = 'Average age: ' + averageAge;
}

let persons = [];

const form$ = document.getElementsByTagName('form')[0];

form$.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(document.querySelector('input[id=name]').value);
    console.log(document.querySelector('input[name=age]').value);
    person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.age = document.querySelector('input[name=age]').value;

    persons.push(person);
    document.querySelector('input[name=name]').value = null;
    document.querySelector('input[name=age]').value = null;
    showUsersTable(persons);
});


// const personsNumber = prompt('Please enter the number of persons:');


// for (let i = 0; i < personsNumber; i++) {
    // setTimeout(function() {
    //     const person = {};
    //     person.name = prompt('Please enter name of the ' + (i + 1) + ' person');
    //     person.age = prompt('Please enter age of the ' + (i + 1) + 'person');
    //     persons[i] = person;

    //     showUsersTable(persons);
    // }, 500)
// }
