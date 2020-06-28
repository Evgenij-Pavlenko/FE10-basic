/*
You have several button in your html code. When you click button, print to console random positive
integer number (from 0 to 100). Number printed must be unique for the certain button (can't be repeated).

Print number not to the console, but below the button.
*/

// let randomNum = document.querySelectorAll('button');
let set = new Set; // если переносить в функцию - постоянно обнуляется. Если оставить здесь - общий сет для всх кнопок()
function random() {
    let randomNumber = 0;
    let isHas = false;
    while (!isHas) {
        if (set.size == 101) {
            console.log("Set randomNumber is full. Reset set")
            set.clear();
        } else {
            console.log(set);
            randomNumber = Math.floor(Math.random() * 101);
            if (!set.has(randomNumber)) {
                set.add(randomNumber)
                isHas = true;
            }
        }
    }
    return randomNumber;
}

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        return function () {


            console.log("For button: " + this.name + " Num is: " + random());
        }
    }());
}