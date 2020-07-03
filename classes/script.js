// class Pet{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

const Pet = class { // сначала объявлять класс! потом использовать. Функцию можно в любом порядке

    name;
    age = 1;

    #chipNumber;

    constructor(name, age, chipNumber) {
        this.name = name;
        this.age = age;
        this.chipNumber = chipNumber;
    }

    static greetEachOther(pet1, pet2) {
       console.log(pet1.sayHello());
       console.log( pet2.sayHello());
    }

    get nameAndAge() {
        return this.name + this.age;
    }

    get registred(){
        return !!chipNumber;
    }

    sayHello() {
        return "Hello";
    }
}

class Cat extends Pet{
    constructor(name, age){
        super(name, age);
    }
    sayHello(){
        return "meayu"
    }
}

const vasja = new Pet('Vasja', 3, 1234567);
const sharik = new Pet('Sharik', 10);

const cat = new Cat('Barsik', 5);