// Diferencias de declaración
console.log("1 - Declaración de variables");
var nombre = "Carlos";  // Evitar usar var
let edad = 28;
const PI = 3.14;

console.log("nombre ", nombre);
console.log("edad ", edad);
console.log("PI ", PI);

edad = 333;
console.log("Edad: ", edad);

// Va a fallar! 
// PI = 1

console.log("PI: ", PI);

// Tipos primitivos
console.log("2 - Tipos primitivos");
let texto = "Hola mundo";
let numero = 42;
let esActivo = true;
let vacio = null;
let indefinido;

if (vacio == indefinido) {
    console.log("Son iguales");
}

numero = 10
if (numero > 40) {
    console.log(numero, " es mayor a 40");
}

if (!esActivo) {
    console.log("Activo");
}

let raro = texto + numero
console.log("> RARO", raro)

// Arrays
console.log("3 - Arrays");
let variable;
let frutas = ["manzana", "banana", "uva"];
console.log(frutas)
console.log(frutas.length, frutas[frutas.length - 1])

// Objetos
console.log("4 - Objetos");
let persona = {
    nombre: "santos",
    edad: 32,
    musico: true,
    mascota: {
        nombre: "Firulais",
        edad: 5
    }
};

persona.musico = false

console.log("Nombre: ", persona.nombre)
if (persona.musico) {
    console.log("Es musico")
}


frutas.push(persona)

console.log("Mascota de ", persona.nombre, " es ", persona.mascota.dni)