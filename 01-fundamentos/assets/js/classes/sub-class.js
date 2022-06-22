class NaturalPerson {

    name;
    lastName;
    age;
    food;

    //* Static methods
    static _count = 0;

    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        NaturalPerson._count ++;
    }

    set setFood(food) {
        this.food = food.toUpperCase();
    }

    get getFood() {
        return this.food;
    }

    static get count() {
        return NaturalPerson._count
    }

    whoIAm() {
        return `Mi name is ${this.name} ${this.lastName} and i'm Ironman`;
    }

}

const john = new NaturalPerson('John', 'Santa', 26);


class Hero extends NaturalPerson{
    clan;

    constructor(name, lastName, age, clan) {
        super(name, lastName, age);
        this.clan = clan;
    }
}

const maicol = new Hero('Maicol', 'Santa', 19, 'Flying');

console.log(maicol);