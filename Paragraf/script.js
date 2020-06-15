//Arrays colors
const colorsArr = ['red',
    'green',
    'blue'];

let color = { //for color=paragraf
    'p1': 0,
    'p2': 0,
    'p3': 0,
    i: '',  //conkret parametr
}

function changeColor(param) {
    if (color === '') {
        new color;
    };
    color.i = param;
    if (color[color.i] > 2) { // change index (make 0) of Array-colors
        color[color.i] = 0;
    }
    setBColor(color); // display in html
    color[color.i]++; // change parametr paragraf-color(next) after display HTML
}

function setBColor(color) {
    document.getElementById(color.i).style.background = colorsArr[color[color.i]];

}

///////////////////////////////////////////////////////////////////////////
//Create function that returns of times it was called (if you call it 1 time - returns 1, 2 times - 2, etc.)
function count(c = 0) {
    return function () {
        return ++c;  //first - displayed, second - incrementing
    };
}


// Write a function that receives one parameter x and returns function which receives parameter a and returns
// multiplication a * x for the first call, and previous returned value multiplied by a for the all consecutive calls
// Example:
// x = 3:
// first call of generated function, a = 2, it returns 6
// second call of generated function, a = 3, it returns 18
// third call of generated function, a = 2, it returns 36
const funct2 = (x) => {
    return (a) => {
        return x = a * x;
    };
};