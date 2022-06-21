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
const maicol = new NaturalPerson('Maicol', 'Santa',19);
console.log(john);

console.log(john.whoIAm());
john.setFood = 'Lasagna';
console.log({
    john
});

console.log(john.getFood);
console.log(NaturalPerson.count);