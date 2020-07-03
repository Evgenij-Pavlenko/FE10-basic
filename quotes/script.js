/*
The Golden Random Quotes project
Write a random quote generator - when you press a button, show the new randomly selected quote
from the list (10 quotes at list). You can copy quotes
 from https://www.thegoldenquotes.net/best-100-public-domain-quotes-of-all-time-collection-01/
Please pay some attention to the design of you project (CSS). It can look like this:
*/

let quotes = [ //цитаты - можно просто массив
    {cite: "Try and fail, but don't fail to try…", author: "John Quincy Adams"},
    {cite: "The things that we love tell us what we are…", author: "St. Thomas Aquinas"},
    {cite: "As I grow older, I pay less attention to what men say. I just watch what they do…", author: "Andrew Carnegie"},
    {cite: "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude…", author: "Thomas Jefferson"},
    {cite: "Hell is empty and all the devils are here…", author: "William Shakespeare"},
    {cite: "The noblest pleasure is the joy of understanding…", author: "Leonardo da Vinci"},
    {cite: "Well done is better than well said…", author: "Benjamin Franklin"},
    {cite: "For a man to conquer himself is the first and noblest of all victories…", author: "Plato"},
    {cite: "Даже путь в тысячу ли начинается с первого шага.", author: "Лао-цзы"},
    {cite: "Всё, что имеет начало, имеет и конец", author: "Нео Андерсон"}
]
let sizeQuotes = Object.keys(quotes).length;

let $button = document.querySelector('button');
let $blockquote = document.querySelector('blockquote')
let $cite = document.querySelector('cite');

$button.addEventListener('click', getEventListener())

function getEventListener() {
    const getRandomNonRepetitiveNumber = getRandomNonRepetitiveNumberGenerator(0, sizeQuotes);
    return function () {
        let num = getRandomNonRepetitiveNumber();
        $blockquote.innerHTML = quotes[num].cite;
        $cite.innerHTML = quotes[num].author;
    }
}

function getRandomNonRepetitiveNumberGenerator(min, sizeQuotes) {
    let numbers = {};
    return function () {
        let number = getRndInteger(min, sizeQuotes);
        if (Object.keys(numbers).length === sizeQuotes){
            $blockquote.innerHTML = "THE END...";
            $cite.innerHTML = '';
            throw new Error('No numbers left...')
        }
        while (numbers[number]) {
            number = getRndInteger(min, sizeQuotes);

        }
        numbers[number] = true;
        console.log(number);
        return number;
    }
}


function getRndInteger(min, sizeQuotes) {
    return Math.floor(Math.random() * (sizeQuotes - min)) + min; //
}