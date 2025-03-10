import { Animal, Dog } from './09-protected';

// const animal = new Animal('Lupito'); 
// animal.move();


const dog = new Dog('Bruno', 'Guadalupo'); 

// Conmportamiento esperado desde la instancia Animal
dog.greeting();
dog.move();

// Comportamiento esperado desde la instancia Dog, mas específico
dog.woof(2);