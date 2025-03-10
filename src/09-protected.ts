export abstract class Animal {
    constructor(protected name : string) {

    }
    move() {
        console.log(`Moving along`);
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }

    protected doSomething() {
        console.log('Doing something');
    }
}

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
        this.doSomething();
    }

    move () {
        console.log('Running');
        super.move();
    }
}

const guadalupo = new Dog('Bruno','guadalupo');
// guadalupo.name = 'Lupita'
// console.log(guadalupo.name);
guadalupo.woof(2);
guadalupo.move();
