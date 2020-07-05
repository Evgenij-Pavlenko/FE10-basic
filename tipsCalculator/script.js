class Bill {
    bill;
    persent;

    #sumBill;

    constructor(bill, persent) {
        console.log(bill);
        this.bill = bill;
        console.log(this.bill);
        this.persent = persent;

    }

    getSumBill() {
        this.calculate();
        return this.#sumBill;
    }

    // setsumBill(s) {
    //     this.#sumBill = s;
    // }

    calculate() {
        if (this.bill != null) {
            this.#sumBill = +this.bill + +(this.bill * this.persent / 100);
        } else throw Error;

    }

}
/*
with class
*/

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    calculateSumWithClass();
})
function calculateSumWithClass(){
    let bill = document.querySelectorAll('input')[0].value;
    let persent = document.querySelectorAll('input')[1].value;
    const sumOut = new Bill(bill, persent);

    document.querySelector('label[name=outSum]').innerHTML = sumOut.getSumBill();
}

/*
without class
*/

// function calculate(bill, percent) {
//     if (bill != null) {
//         return +bill + +(bill * percent / 100);
//     } else {
//         return "Bill = null";
//     }
// };


// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     calculateSum();
// })


// function calculateSum(){
//     let bill = document.querySelectorAll('input')[0].value;
//     let percent = document.querySelectorAll('input')[1].value;
//     document.querySelector('label[name=outSum]').innerHTML = calculate(bill, percent);
// }
