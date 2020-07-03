const quotes = [ //цитаты
    {qoute: "Try and fail, but don't fail to try…", author: "John Quincy Adams"},
    {qoute: "The things that we love tell us what we are…", author: "St. Thomas Aquinas"},
    {qoute: "As I grow older, I pay less attention to what men say. I just watch what they do…", author: "Andrew Carnegie"},
    {qoute: "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude…", author: "Thomas Jefferson"},
    {qoute: "Hell is empty and all the devils are here…", author: "William Shakespeare"},
    {qoute: "The noblest pleasure is the joy of understanding…", author: "Leonardo da Vinci"},
    {qoute: "Well done is better than well said…", author: "Benjamin Franklin"},
    {qoute: "For a man to conquer himself is the first and noblest of all victories…", author: "Plato"},
    {qoute: "Даже путь в тысячу ли начинается с первого шага.", author: "Лао-цзы"},
    {qoute: "Всё, что имеет начало, имеет и конец", author: "Нео Андерсон"}
]

document.querySelector('button').addEventListener('clic', showQoute())

function showQoute(){
const qouteNumber = getRndInteger(0, quotes.length);
console.log(qouteNumber);
    document.querySelector('blockquote.blockquote.mb-0 p').innerHTML = quotes[qouteNumber].qoute;
    document.querySelector('blockquote footer cite').innerHTML = quotes[qouteNumber].author;
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min )) + min;
}