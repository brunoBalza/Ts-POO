export class Animal {
    constructor(public name : string) {

    }
    move() {
        console.log(`Moving along`);
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }
}

const guadalupo = new Animal('guadalupo');
guadalupo.move();
console.log(guadalupo.greeting());

export class Dog extends Animal {

    constructor (
        public owner: string,
        name: string,
    ) {
        super(name);
        // super(name);
    }

    woof(times: number) {
        for (let i = 0; i < times; i++) {
            console.log('Woof!');
        }
    }
}
const minipo = new Dog('Juan', 'Minipo');
minipo.greeting();
minipo.move();
minipo.woof(3);
console.log(minipo.greeting());

// minipo.woof(3);