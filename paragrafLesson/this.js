// console.log(this);

const person = {
    name: 'Vasja',
    age: 25,
    personSays:  () => {
console.log("My name is " + this.name + " , Im " + this.age )
    }
}