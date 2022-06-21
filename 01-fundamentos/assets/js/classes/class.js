class NaturalPerson {

    name;
    lastName;
    age;

    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    whoIAm() {
        return `Mi name is ${this.name} ${this.lastName} and i'm Ironman`;
    }

}

const john = new NaturalPerson('John', 'Santa', 26);
console.log(john);

console.log(john.whoIAm());