/*
The Golden Random Quotes project
Write a random quote generator - when you press a button, show the new randomly selected quote
from the list (10 quotes at list). You can copy quotes
 from https://www.thegoldenquotes.net/best-100-public-domain-quotes-of-all-time-collection-01/
Please pay some attention to the design of you project (CSS). It can look like this:
*/

let quotes = { //цитаты
    '1': ["Try and fail, but don't fail to try…", "John Quincy Adams"],
    '2': ["The things that we love tell us what we are…", "St. Thomas Aquinas"],
    '3': ["As I grow older, I pay less attention to what men say. I just watch what they do…", "Andrew Carnegie"],
    '4': ["Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude…", "Thomas Jefferson"],
    '5': ["Hell is empty and all the devils are here…", "William Shakespeare"],
    '6': ["The noblest pleasure is the joy of understanding…", "Leonardo da Vinci"],
    '7': ["Well done is better than well said…", "Benjamin Franklin"],
    '8': ["For a man to conquer himself is the first and noblest of all victories…", "Plato"],
    '9': ["Даже путь в тысячу ли начинается с первого шага.", "Лао-цзы"],
    '10': ["Всё, что имеет начало, имеет и конец", "Нео Андерсон"]
}
let sizeQuotes = Object.keys(quotes).length;

let $button = document.querySelector('button');
$button.addEventListener('click', getEventListener())

function getEventListener() {
    const getRandomNonRepetitiveNumber = getRandomNonRepetitiveNumberGenerator(1, sizeQuotes);
    return function () {
        let num = getRandomNonRepetitiveNumber();
        this.nextElementSibling.innerHTML = quotes[num][0];
        this.nextElementSibling.nextElementSibling.innerHTML = quotes[num][1];
    }
}

function getRandomNonRepetitiveNumberGenerator(min, sizeQuotes) {
    let numbers = {};
    return function () {
        let number = getRndInteger(min, sizeQuotes);
        if (Object.keys(numbers).length === sizeQuotes){
            $button.nextElementSibling.innerHTML = "THE END...";
            $button.nextElementSibling.nextElementSibling.innerHTML = '';
            throw new Error('No numbers left...')
        }
        while (numbers[number]) {
            number = getRndInteger(min, sizeQuotes);

        }
        numbers[number] = true;
        return number;
    }
}


function getRndInteger(min, sizeQuotes) {
    return Math.floor(Math.random() * (sizeQuotes - min + 1)) + min; //
}