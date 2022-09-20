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



// * STRINGS


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

// * POSICIONES (INDICES) Y LENGTH DE LOS STRINGS


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

// * importante
// propiedades como length no llevan parentesis. son basadas en variables.
// metodos si llevan parentesis. son basados en funciones. 

// * OTROS METODOS COMUNES DE STRINGS


let newString = "bananaramawakakakasasamiramiraheheh";


// .slice()

let newSection = newString.slice(10, 14) // waka
console.log( newSection )

console.log( newSection.toUpperCase() )

// Waka
console.log( newSection[0].toUpperCase() + newSection.slice(1) )
// console.log( newSection[0].toUpperCase() + newSection.slice(1, 4) )



let name = "carolina alonso" // J.C.

let espacioVacio = name.indexOf(" ")
let primeraLetra = name[0].toUpperCase()
let segundaLetra = name[espacioVacio+1].toUpperCase()
console.log( primeraLetra + "." + segundaLetra + "." )


// * NUMBERS

let posNum = 424;
let negNum = -7346872;
let floatNum = 43.23423

console.log(posNum, negNum, floatNum)



// * operadores matematicos

let num1 = 6;
let num2 = 2;

console.log(num1 + num2) // 8
console.log(num1 - num2) // 4
console.log(num1 * num2) // 12
console.log(num1 / num2) // 3
console.log(num1 ** num2) // 36

// modulo
console.log(num1 % num2)
// el restante de la division. Si no es exacta.

console.log(7 % 2) // 2 + 2 + 2 + 1
// lo usamos para saber si un numero es divisible entre otro

console.log(227462367 % 2) 
// si es 0, es par
// si es 1, es impar



// operadores de asignacion + operadores matematicos

let myNewAge = 20;
const valorOriginal = myNewAge

// myNewAge = 21
myNewAge = myNewAge + 1

console.log(myNewAge)

myNewAge += 1;

console.log(myNewAge)

myNewAge++ // solo para incrementos 1
// los tres hacen exactamente lo mismo

console.log(myNewAge)

console.log(myNewAge)
console.log("valorOriginal", valorOriginal)



// COERCION => cuando el sistema cambia los tipos de data

console.log(5 + 7)
console.log("5" + "7")

// operador + tiene doble funcion
// function suma (para numeros)
// funcion concatenacion (para strings)

console.log("5" - "3") // numero 2.
// usamos operado matematico -
// consigue un string y lo intenta coercionar a un numero
// "5" a 5
// "3" a 3


console.log("javascript" - "script") // ??? Not a Number
// intenta hacer coercion y no puede convertir el str a numero


console.log( "3" + 5 )
console.log( 3 + "5" )
// el operador + siempre actua primero como concatenador. y luego como suma.



// metodos y objetos globales

// String
// Number
// Boolean
// Math => debe estar en mayuscula
console.log( Math.random() )

// un numero aleatorio entero entre 0 y 10

let randomNumber = Math.random() * 10

// Math.floor() // llevar un numero decimal a su entero más bajo

console.log( Math.floor(randomNumber) )

// tambien existen Math.ceil y Math.round

console.log( Math.floor( Math.random() * 100 ) )


// * BOOLEANOS


let posBool = true;
let negBool = false;


console.log(negBool)

// operador no (!)

console.log(!posBool)



// OPERADORES DE COMPARACION

let food1 = "pizza";
let food2 = "hamburguesa";
let food3 = "pizza"

// "===" estrictamente igual
// "!==" estrictamente no igual
console.log( food1 === food3 ) // true

console.log( !(food1 === food3) ) // falso. igual que abajo.
console.log( food1 !== food3 ) // false. igual que arriba.


let newNum1 = 10;
let newNum2 = 10;

console.log(newNum1 >= newNum2) // true

// > mayor que
// < menor que
// >= mayor o igual que
// <= menor o igual que

let char1 = "a";
let char2 = "f";

console.log( char1 < char2 )



console.log("5" === "5") // true
console.log("5" === 5) // false. === verifica valor y tipo de data
console.log("5" == 5) // coercion. true.

// siempre utilizar === !==



// OPERADORES LOGICOS

// &&
// ||

console.log( 10 === 10 && 20 === 20 )
// && si al menos una es falso, todo es falso.



console.log( "hola" === "adios" || "patata" === "patata" )
// || si al menos uno es true, entonces todo es verdadero.




// ACTIVIDAD.

// Guess the console input for each console.log

console.log("ACTIVIDAD")

console.log(true && false); // false
console.log(11 % 3 === 2); // true
console.log(false || true); // true
console.log(!true || false); // false
console.log(17 == '17'); // true
console.log(123 === '123'); // false
console.log('Hello' - 'llo'); // NaN

let statement = 'I love JavaScript!';
let subStatement = statement.slice(7, statement.length);
console.log(subStatement); 

statement[0].toLowerCase(); // no muta el string. Strings son inmutables.
console.log(statement); "I love Javascript!"

// "i"
// "JAVASCRIPT!"
// "i love javascript!"
// "j"
// "I love Javascript!"



// * CONDICIONALES


// IF IF ELSE

let naranjas = 0;

// if (condicion o condiciones) {
//   codigo a ejecutar si las condiciones son true
// }

if (naranjas === 0) {
  console.log("no tienes naranjas")
} else if (naranjas > 0 && naranjas < 5) {
  console.log("tienes naranjas para hacer un juego")
} else {
  console.log("puedes hacer muchos jugos")
}


// THRUTHY Y FALSY

let limones = 0
if (limones) {
  // el valor 10 tiene una similitud al valor true. es Thruthy
  console.log("esto se ejecuta?")
}

// 0 es un valor falsy. en un condicional se envalua como false.

if (0 || "" || undefined || NaN || null || false) {
  // .todos los elementos arriba son Falsy
  console.log("esto nunca se verá")
}


let banana = 5;

switch(banana) {
  case 0:
    console.log("no tienes bananas para hacer jugo");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("SI tienes bananas para hacer jugo");
    break;
  default:
    // lo mismo que el ultimo else
    console.log("tienes para hacer muchos jugos")
}



// FOR LOOP

// 1. una variable control que determina el flujo del bucle
// 2. condicion que continua ejecutando el bucle.
// 3. controla como avanza el bucle, manipula la variable control
// let patata;
for (let patata = 0; patata < 10; patata = patata + 1) {
  // 1. solamenta una vez. let i = 0 (UNA VEZ al inicio)
  // 2. if (i < 10) ejecuta el codigo y continua el bucle
  // if false, se detiene el bucle

  // accion a ejecutar
  console.log("ejecutando el codigo varias veces", patata)


  // 3. i = i + 1
}

// console.log(patata)

// EJEMPLO DE BUCLE CON VARIABLES EXTERNAS


let lyrics = "Around the World, Around the World, Around the World"

// bucle que vaya por todos los caracteres y me diga cuantas veces está la letra "o"
let counter = 0; // la cantidad de letras "o"

for (let i = 0; i < lyrics.length; i++) {

  console.log( lyrics[i] )
  if (lyrics[i] === "o") {
    counter = counter + 1
    // counter++
  }

}

console.log("la cantidad de letras o es: ", counter)



// EJEMPLO 2

let strRaro = "4360000400050002000X45250000433400";
// 1. todos los numeros menos los 0
// 2. cuando llega a la X, deje de agregar numeros
// 436452

let newStr = "" // "436452"

for (let i = 0; i < strRaro.length; i++) {

  // si es 0, no lo incluyas. continue
  if (strRaro[i] === "0") {
    continue; // deten esta iteracion del bucle, y pasa a la siguiente
  }
  // si es X, deten el bucle. break.
  if (strRaro[i] === "X") {
    break; // deten TODO el bucle.
  }

  console.log(strRaro[i])
  newStr = newStr + strRaro[i]

}

console.log(newStr)