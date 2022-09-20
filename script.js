console.log("hola mundo de Javascript");

// comentario en una linea

/*
comentarios
en multiples
lineas 
*/

console.log("hola", 356, true); // herramienta de desarrollo

let myHobby; // declaracion de variable. la caja ha sido creada

console.log(myHobby);
// undefined es el sistema diciendo. este valor no existe aun.

myHobby = "videojuegos"; // inicialización de variable

console.log(myHobby);

let myOtherHobby = "tocar guitarra"; // declaracion e inicialización de una variable

console.log(myOtherHobby);


// cosas que no podemos o no deberiamos hacer

// let 1fruta;
// let import; // no podemos usar palabras reservadas
let myhobbyfavoritodelmundo; // no hacer :(
let myHobbyFavoritoDelMundo; // :)



// let, const, var

let myAge = 30;
console.log("variable con LET antes de cambiar", myAge)
myAge = 28;
console.log("variable con LET despues de cambiar", myAge)

const birthday = "01/01/2000"
console.log(birthday, "antes de cambiar CONST")
// birthday = "02/10/2001" // typeError , no se puede asignar.

// const nuevaConstante; // no nos permite :(

// var es una palabra reservada de ES- . Obsoleta.
// no usar var. siempre cambiar a let o const.
// el concepto llamada hoisting.



// TIPOS DE DATA

let variable1 = "hola";
console.log(variable1, typeof variable1)

let variable2 = 7469;
console.log(variable2, typeof variable2)

let variable3 = true;
console.log(variable3, typeof variable3)

let variable4 = undefined; // el sistema diciendonos que el valor no existe.
console.log(variable4, typeof variable4)

let variable5 = null; // el desarrollador diciendo que un valor no existe aun.
console.log(variable5, typeof variable5)

let variable6 = {};
console.log(variable6, typeof variable6)

let variable7 = [];
console.log(variable7, typeof variable7)



// STRINGS


let fruit1 = "fresa";
let fruit2 = "pera";
let fruit3 = "banana";

// concatenar strings
// let receta = "La receta lleva: " + fruit1 + " " + fruit2
let cantidadReceta = 3

// interpolacion de variables
// `` se llaman backticks y nos permite template literals
let receta = `${cantidadReceta} recetas llevan: ${fruit1}, ${fruit2} y tambien ${fruit3}`;

console.log(receta)

// POSICIONES (INDICES) Y LENGTH DE LOS STRINGS


let simpleString = "hola";
//                  ||||
//                  0123

console.log( simpleString.indexOf("h") )
// -1 significa que no lo consiguió
console.log( simpleString.charAt(0) )
// notacion de corchetes para buscar caracteres

console.log( simpleString[0] ) // es exactamente lo mismo que simpleString.charAt(0)
console.log( simpleString[3] ) // ??

console.log( simpleString.length )

let longString = "jsadakudjagywjdgyajdgansbdjabhwjh"

console.log( longString[0] )
console.log( longString[ longString.length - 1 ] )



// OTROS METODOS COMUNES DE STRINGS


let newString = "bananaramawakakakasasamiramiraheheh";


// .slice()

let newSection = newString.slice(10, 14) // waka
console.log( newSection )

console.log( newSection.toUpperCase() )

// Waka
console.log( newSection[0].toUpperCase() + newSection.slice(1) )
// console.log( newSection[0].toUpperCase() + newSection.slice(1, 4) )


console.log(  newSection.startsWith("hola") )




