//в качестве parameter передается одна из функций сортировки
function showUsersTable(persons = [], parameter = sortedByAgeUp) {

    console.log(persons);
    //выбор варианта сортировки в зависимости от parameter
    switch (parameter) {
        //сортировка по имени
        case sortedByLastName:
            console.log("po imeni");
            parameter = persons.sort(function (a, b) {
                if (a.lastName < b.lastName) return -1;
                if (a.lastName > b.lastName) return 1;
                return 0;
            });
            break;

        //сортировка по возрасту по возрастанию
        case sortedByAgeUp:
            console.log("po age up");
            parameter = persons.sort(function (a, b) {
                if (a.age < b.age) return -1;
                if (a.age > b.age) return 1;
                return 0;
            });
            break;

        //сортировка по возрасту по убыванию
        case sortedByAgeDown:
            console.log("po age down");
            parameter = persons.sort(function (a, b) {
                if (a.age > b.age) return -1;
                if (a.age < b.age) return 1;
                return 0;
            });
            break;

        default:
            break;
    }

    let averageAge = 0;
    let maxAge = 0;
    let minAge = 0;
    let innerHtmlTableBody = '';
    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + parameter[i].lastName + '</td><td>' + parameter[i].firstName + '</td><td>' + parameter[i].age + '</td></tr>';
        console.log('Person ' + (i + 1) + ': lastName = ' + parameter[i].lastName + ': firstName = ' + parameter[i].firstName + ' age = ' + parameter[i].age);
        averageAge += + parameter[i].age;

        if (maxAge < parameter[i].age) {
            maxAge = parameter[i].age;
        }
        if (minAge == 0 || minAge > parameter[i].age) {
            minAge = parameter[i].age;
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