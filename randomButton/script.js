/*
You have several button in your html code. When you click button,
print to console random positive integer number (from 0 to 100).
Number printed must be unique for the certain button (can't be repeated).

Print number not to the console, but below the button.
*/

document.querySelectorAll('button').forEach(function(button) {
    button.addEventListener('click', function() {
        console.log(getRandomNonRepetitive());
    })
});

function getRandomNonRepetitive(i) {
    let numbers = {};
    return function() {
        if (Object.keys(numbers).length === 9)
            throw new Error('No numbers left...')
        let number = getRndInteger(0, 10);
        while(numbers[number]) {
            console.log(numbers);
            number = getRndInteger(0, 10);
        }
        numbers[number] = true;
        return number;
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}