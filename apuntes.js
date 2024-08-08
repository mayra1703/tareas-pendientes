console.log("Hola Mundo");

//alert('Hola desde un alert');

let nombre = "Mayra";

const pi = 3.14;

//! Tipos de datos

// No definido
let noDefinido;

// Numero
let cantidad = 50;

// Cadena de texto o String
let bebida = 'agua';

// Booleanos
let activo = true;

//! Objetos
// Personas: nombre, apellido, edad, peso
let persona = {
    nombre: 'Mayra',
    apellido: 'Mendez',
    edad: 21,
};

console.log(persona);

//! Array (coleccion)
let personas = [
    {
        nombre: 'Mayra',
        apellido: 'Mendez',
        edad: 21,
    },

    {
        nombre: 'Ivan',
        apellido: 'Valdez',
        edad: 10,
    },

    {
        nombre: 'Nayeli',
        apellido: 'Viera',
        edad: 23,
    },
    persona
];

console.log(personas);
console.log(personas[2]);

//! Funciones JS
// Listado de instrucciones
function suma(a, b) {
    return a + b;
}

let resultadoDeSuma = suma(9, 7);
console.log(`resultado de la suma: ${resultadoDeSuma}`);

function multiplicacion(a, b) {
    return a * b;
}

let resultado = multiplicacion(5, 7);
console.log(`resultado de la multiplicacion: ${resultado}`);

//! Operadores aritmeticos
let datoA = 10;
let datoB = 5;

// Suma
let suma = datoA + datoB;

// Resta
let resta = datoA - datoB;

// Multiplicacion
let multi = datoA * datoB;

// Division
let div = datoA / datoB;

// Modulo o residuo
let residuo = datoA % datoB;

// Incremento
let incremento = datoA;
incremento++;

// Decremento
let decremento = datoA;
decremento++;

//! Operadores relacionales
// Mayor que >
let mayorQue = datoA > datoB;

// Menor que >
let menorQue = datoA < datoB;

// Menor o igual que >=
let menorIgual = datoA <= datoB;

// Igual que
let igual = datoA == datoB;

// Diferente de !=
let diferente = datoA != datoB;

//! Operadores logicos
// &&
let and = (datoA < 10 && datoB > 10);

// ||
let or = (datoA > 10 || datoB > 10);

// not
let not = !(datoA < 10);

//! Operadores de asignacion
// Asignacion simple (=)
let dato1 = 60;

// Sumar y asignar +=
let masIgual = 10;
masIgual += datoA;

// Restar y asignar -=
let menosIgual = 10;
masIgual -= datoB;
