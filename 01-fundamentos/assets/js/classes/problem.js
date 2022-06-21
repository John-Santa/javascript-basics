const jsan = {
    name: 'John',
    lastname: 'Santa',
    age: 26,
    print(){
        console.log(`Name: ${this.name} ${this.lastname}`);
    }
}

const msan = {
    name: 'Maicol',
    lastname: 'Santa',
    age: 19,
}

jsan.print();

//* old way of simulating classes
function Person(name, lastname, age) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;

    this.print = function() {
        console.log(`Name: ${this.name} ${this.lastname}`);
    }
}

const nohelia = new Person('Nohelia', 'Otalvaro', 52);
nohelia.print();