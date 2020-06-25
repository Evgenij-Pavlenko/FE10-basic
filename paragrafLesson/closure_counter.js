// Create function that returns number of times it was called (if you call it 1 time - returns 1, 2 times - 2, etc.)

const counterFactory1 = () => {
    let x = 1;
    return () => {
        return x++;
    }
}

const counter1 = counterFactory1();

const counter2 = (() => {
    let x = 1;
    return () => {
        return x++;
    }
})();

const counter3 = function() {
    let x = 1;
    return function(){
        return x++;
    }
}();

function counterFactory2() {
    let x = 1;
    return function() {
        return x++;
    }
}

const counter4 = counterFactory2();