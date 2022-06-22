class Person {

    static byObject( { name, lastname, country } ) {
        return new Person(name, lastname, country);
    }

    constructor(name, lastname, country) {
        this.name = name;
        this.lastname = lastname;
        this.country = country;
    }

    getInfo() {
        console.log(`Info: ${this.name} ${this.lastname}, ${this.country}`);
    };
}

const john = new Person('John', 'Santa', 'Colombia');
john.getInfo();

const maicol = {
    name: 'Maicol',
    lastname: 'Santa',
    country: 'Colombia'
};

const maicol2 = Person.byObject(maicol)
maicol2.getInfo();