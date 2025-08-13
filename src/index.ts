
// import {Hero as Heroe} from './classes/Hero';

import { printObjetc, genericFunction, genericFunctionArrow} from "./generics/generics";

// // import * as HeroeClass from './classes/Hero'; //importar todo lo de Hero como HeroeClass


// // import  powers2  from './data/powers'; 

// //suponiendo que Hero es una variable que no puedo cambiar el nombre, para no tener conflictos con la clase Hero
// //renombramos Hero a Heroe
// // const Hero = 123;

// console.log('Hola Mundo!');

// const ironman = new Heroe('Ironman', 6, 45);

// console.log(ironman.power);

// // console.log(powers2);




//manejando genericos

printObjetc('Hola Mundo!');
printObjetc(123);
printObjetc([1, 2, 3, 4, 5]);
printObjetc({ name: 'Ironman', power: 6, age: 45 });


// console.log(genericFunction('Hola Mundo!').toFixed(2)); // Esto causará un error porque toFixed no es un método de string);
console.log(genericFunctionArrow(3.1416).toFixed(2));

const fernando = 'Fernando';

console.log(genericFunctionArrow(fernando).toUpperCase()); // Esto funcionará porque toUpperCase es un método de string

console.log(genericFunctionArrow(new Date()).getDate()); // Esto funcionará porque getDate es un método de Date


