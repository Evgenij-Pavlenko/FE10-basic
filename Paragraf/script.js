const colorsArr = ['red',
    'green',
    'blue'];

const colors = {
    1: 'red',
    2: 'green',
    3: 'blue'

}

let color = { //для обозначения, какой цвет у какого параграфа
    bColor: '',
    paragraf: '', //id pafagraf or name
    i:0 //проходит по объекту с цветами - хотел подвязать через отдельный объект
}
// let set {

// }


let i = 0; //проходит по объекту с цветами

function changeColor(param) {
    if(color === ''){
       new color;

    }
    if (color.i > 2) { // вышел за предела массива цветов
        color.i = 0
        console.log('colors[count]: ' + colorsArr[color.i])
    }
    color.paragraf = param;
    color.bColor = colorsArr[color.i];
    console.log('colors[count]: ' + colorsArr[color.i])
    console.log('color.paragraf: ' + color.paragraf)
    color.i++;
    setBColor(color);
}

function setBColor(color) {
    document.getElementById(color.paragraf).style.background = color.bColor;

}
///////////////////////////////////////////////////////////////////////////
//Create function that returns of times it was called (if you call it 1 time - returns 1, 2 times - 2, etc.)
let count1 = 0;

document.querySelector('p').addEventListener('click', function (event) { /// пока не работает (
    event.preventDefault();
    return function (count) {
        count++;
        console.log(count);
    }
});