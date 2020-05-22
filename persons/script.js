function showUsersTable(persons = []) {

    let averageAge = 0;
    let minAge = persons[0].age;
    let maxAge = persons[0].age;
    let innerHtmlTableBody = '';
    for (let i = 0; i < persons.length; i++) {
        innerHtmlTableBody += '<tr><td>' + persons[i].name + '</td><td>' + persons[i].age + '</td><td>' + persons[i].city + '</td></tr>';
        averageAge += + persons[i].age;
        if (persons[i].age > maxAge)
            maxAge = persons[i].age;
        if (persons[i].age < minAge)
            minAge = persons[i].age;
    }
    averageAge /= persons.length;

    document.getElementsByTagName('tbody')[0].innerHTML = innerHtmlTableBody;
    document.querySelector('tfoot div.alert').innerHTML = 'Average age: ' + averageAge + ' Min age: ' + minAge + ' Max age: ' + maxAge;
}

let persons = [];
// отвечает за направление сортировки age - по возрастанию или убыванию
let ageSort = true;

const form$ = document.getElementsByTagName('form')[0];
form$.addEventListener('submit', function (event) {
    event.preventDefault();

    let person = {};
    person.name = document.querySelector('input[name=name]').value;
    person.age = document.querySelector('input[name=age]').value;
    person.city = document.querySelector('input[name=city]').value;

    persons.push(person);
    // очистка полей ввода формы после нажатия на Submit?
    document.querySelector('input[name=name]').value = null;
    document.querySelector('input[name=age]').value = null;
    document.querySelector('input[name=city]').value = null;

    showUsersTable(persons);
})
// -------------------Сортировка по возрасту туда-сюда----------------------------
const th$ = document.getElementById('age');     //работает
th$.addEventListener('click', function (event) {
    event.preventDefault();

    let sortedPersons;

    if (ageSort) {
        sortedPersons = persons.sort(function (a, b) {
            return a.age - b.age;
        });
    } else {
        sortedPersons = persons.sort(function (a, b) {
            return b.age - a.age;
        });
    }
    ageSort = !ageSort;
    showUsersTable(sortedPersons);
})