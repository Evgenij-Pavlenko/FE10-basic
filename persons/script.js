function showUsersTable(persons = []) {
    console.log(persons);
    const sortedPersons = persons.sort(function (a, b) {
        return a.age - b.age;
    });

    let averageAge = 0;
    let maxAge = 0;
    let minAge = 0;
    let innerHtmlTableBody = '';
    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + sortedPersons[i].lastName + '</td><td>' + sortedPersons[i].firstName + '</td><td>' + sortedPersons[i].age + '</td></tr>';
        console.log('Person ' + (i + 1) + ': lastName = ' + sortedPersons[i].lastName + ': firstName = ' + sortedPersons[i].firstName + ' age = ' + sortedPersons[i].age);
        averageAge += + sortedPersons[i].age;

        if (maxAge < sortedPersons[i].age) {
            maxAge = sortedPersons[i].age;
        }
        if (minAge == 0 || minAge > sortedPersons[i].age) {
            minAge = sortedPersons[i].age;
        }
    }
    averageAge /= +persons.length;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;

    console.log('Average age of person:' + averageAge + ', max age: ' + maxAge + ', min age: ' + minAge);
    document.querySelector('tfoot div.alert').innerHTML = 'Average age: <b>' + averageAge + '</b>, max age: <b>' + maxAge + '</b>, min age: <b>' + minAge + '</b>';
}

let persons = [];
let averageAge = 0;
const personsNumber = prompt('Please enter the number of persons:');
console.log(personsNumber);

for (let i = 0; i < personsNumber; i++) {
    setTimeout(function () {
        const person = {};
        person.lastName = prompt('Please enter last name of the ' + (i + 1) + ' person');
        person.firstName = prompt('Please enter first name of the ' + (i + 1) + ' person');
        person.age = prompt('Please enter age of the ' + (i + 1) + 'person');
        persons[i] = person;

        showUsersTable(persons);
    }, 500)
}