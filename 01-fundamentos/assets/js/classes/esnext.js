class Rectangle {

    #area = 0;

    constructor(base = 0, height = 0) {
        this.base = base;
        this.height = height;

        this.#area = base * height;
    }
}

const rectangle = new Rectangle(10, 15);
console.log({rectangle});