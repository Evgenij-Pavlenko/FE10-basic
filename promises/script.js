// function printToConsole(){
//     console.log("Hello");
// }

// setTimeout(()=> console.log("World!!"), 1000);
// console.log("Hello");

// setTimeout(function(){

// },
// 5000 // через это время будет исполнено, мс
// )

// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=> resolve('Hello'), 3000);
//     resolve("Promice resolved");
// })
const promise = new Promise((resolve, reject) => {
    setTimeout(()=> reject('Hello'), 3000);
    resolve("Promice resolved");
})
promise
.then(str => console.log(str))
.then(() => console.log ('World'))
.catch(()=> console.log('All bad...'))


promise = new Promise(resolve, reject) =>{
    if(random(0,2) ===0){
        resolve("Promise resolved");
    }
    reject("Promide lecldrert")
}

randomPromisre
then(str => console)
    .catch(reason => {
        throw Error } );

setTimeout(()=> console.log("World!!"), 4000);
setTimeout(()=> console.log("Hello"), 1000);
console.log("World!!");
function randomInt(min, max){
    return Math.floor(Math.random() * (max-min))+min;
}