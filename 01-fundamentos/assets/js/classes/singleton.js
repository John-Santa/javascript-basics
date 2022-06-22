class Singleton {

    constructor(name = '') {

        if (!!Singleton.instance) {
            return Singleton.instance
        }

        Singleton.instance = this;
        this.name = name;
    }
}

const john = new Singleton('John');
console.log(john);
const maicol = new Singleton('Maicol');
console.log(maicol);