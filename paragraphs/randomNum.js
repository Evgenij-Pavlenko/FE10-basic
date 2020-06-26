/*
You have several button in your html code. When you click button, print to console random positive
integer number (from 0 to 100). Number printed must be unique for the certain button (can't be repeated).

Print number not to the console, but below the button.
*/

let randomNum = document.querySelectorAll('button');
randomNum
function random() {
    return Math.floor(Math.random() * 101);
}

let buttons = document.getElementsByTagName('button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        return function() {
        console.log("For button: " + this.name + " Num is: " + random());
        }
   }());
}