const colors = ['white', 'red', 'green', 'blue'];
//                 0       1       2        3

document.querySelectorAll('p').forEach(function (element) {
    element.addEventListener('click', changeColor(element))
})

function changeColor(param) {
    let currentColor = 0;
    return () => {
        currentColor++;
        return param.style['background-color'] = colors[currentColor % colors.length];

        // this.style['background-color'] = color[++currentColor % color.length]; - или так - в одну строчку
        // this.style.backgroundColor = 'red'; // auch richtig)
    }

}

