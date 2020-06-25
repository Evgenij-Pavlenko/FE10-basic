// You have array of the colors ['red', 'green', 'blue'], and you have several paragraphs in you html code. If you click on paragraph, it should be colored as the first color from the array, next click - next color. This should work for any paragraph independently.

const color = ['white', 'red', 'green', 'blue'];

// let currentColor = 0;

// document.querySelectorAll('p').forEach(function (element) {
//     element.addEventListener('click', function () {
//         currentColor++;
//         return this.style['background-color'] = color[currentColor % color.length];
//         // this.style['background-color'] = color[++currentColor % color.length]; - или так - в одну строчку
//         // this.style.backgroundColor = 'red'; // auch richtig)
//     })
// })
document.querySelectorAll('p').forEach(function (element) {
    element.addEventListener('click', changeColor(element) )
})
function changeColor(param){
    let currentColor = 0;
        return () => {
            currentColor++;
            return param.style['background-color'] = color[currentColor % color.length];

            // this.style['background-color'] = color[++currentColor % color.length]; - или так - в одну строчку
            // this.style.backgroundColor = 'red'; // auch richtig)
        }

    }



