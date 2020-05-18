//в качестве parameter передается одна из функций сортировки
function showUsersTable(persons = [], parameter = sortedByAgeUp) {

    console.log(persons);
    //выбор варианта сортировки в зависимости от parameter
    switch (parameter) {
        //сортировка по имени
        case sortedByName:
            console.log("po imeni");
            parameter = persons.sort(function (a, b) {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
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
    let innerHtmlTableBody = '';
    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + parameter[i].name + '</td><td>' + parameter[i].age + '</td></tr>';
        console.log('Person ' + (i + 1) + ': name = ' + parameter[i].name + ' age = ' + parameter[i].age);
        averageAge += + parameter[i].age;
    }
    averageAge /= persons.length;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;

    console.log('Average age of person:' + averageAge);
    document.querySelector('tfoot div.alert').innerHTML = 'Average age: ' + averageAge;
}

let persons = [];
let averageAge = 0;
const personsNumber = prompt('Please enter the number of persons:');
console.log(personsNumber);

for (let i = 0; i < personsNumber; i++) {
    setTimeout(function () {
        const person = {};
        person.name = prompt('Please enter name of the ' + (i + 1) + ' person');
        person.age = prompt('Please enter age of the ' + (i + 1) + 'person');
        persons[i] = person;

        showUsersTable(persons);
    }, 500)
}