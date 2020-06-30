/*
You have several button in your html code. When you click button,
 print to console random positive integer number (from 0 to 100).
  Number printed must be unique for the certain button (can't be repeated).

Print number not to the console, but below the button.
*/


document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', getEventListener(button))
});

function getEventListener(button) {
    const getRandomNonRepetitiveNumber = getRandomNonRepetitiveNumberGenerator(0, 10);
    return function () {
        button.nextElementSibling.innerText = getRandomNonRepetitiveNumber();
        console.log(getRandomNonRepetitiveNumber());
    }
}

function getRandomNonRepetitiveNumberGenerator(min, max) {
    let numbers = {};
    return function () {
        if (Object.keys(numbers).length === max - min) {
            throw new Error('No numbers left...');
        }
        let number = getRndInteger(min, max);
        while (numbers[number]) {
            console.log(numbers);
            number = getRndInteger(min, max);
        }
        numbers[number] = true;
        return number;
    }
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}