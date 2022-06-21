class NaturalPerson {

    name;
    lastName;
    age;

    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

}

const jsan = new NaturalPerson('John', 'Santa', 26);
console.log(jsan);