console.log(Math.PI); // 3.141592653589793


class MyMath {
    static PI: number = 3.14; 

    static max (...numbers: number[]) {
        console.log(numbers);
        return numbers.reduce((max, item) => max >= item ? max: item);   
    }
}

console.log(MyMath.PI); // 3.14
/* que es lo interesante de esto? que no necesitamos instanciar la clase para acceder a la propiedad PI,
sino que podemos acceder directamente a la propiedad PI de la clase MyMath */

const number = [12, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Array resolving', Math.max(...number)); // 12

console.log('Resolution',MyMath.max(-10, -2, -3, -4012, -5));