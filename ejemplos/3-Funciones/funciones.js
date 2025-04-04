
console.log("1 - Funciones estandard");
function saludar(nombre) {
    return `Hola ${nombre}`;
}

console.log(saludar('Mundo'));


console.log("2 - Funciones anonimas");
const despedir = function (nombre) {
    return `Chau ${nombre}`;
};

console.log(despedir('Mundo'));

console.log("3 - Funciones flecha");
const multiplicar = (a, b) => a * b;
const multiplicar2 = (a, b) => {
    let result = a * b
    console.log("MULTIPLICADO")
    result += 1

    return result
};

console.log(multiplicar(2, 3));
console.log(multiplicar2(2, 3));

// Parametros

console.log("4 - Parametros");
function sumar(a = 1, b = 2) {
    console.log("a - ", a)
    console.log("b - ", b)
    return a + b;
}

console.log(sumar("2", "3"));
console.log(sumar(null, 3));
console.log(sumar())

console.log("5 - Funciones como parametros");
let valor = false
let f;
if (valor) {
    f = sumar
} else {
    f = multiplicar
}
console.log(f(2, 3))

// condicionales
console.log("5 - Condicionales");
let edad = 20;
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

console.log("6 - Operador ternario");
let mensaje = edad >= 18 ? "Mayor" : "Menor";
console.log(mensaje);


let variable = "juan"

// let nombre = "santos"
// if (variable) {
//     nombre = variable
// }
let nombre = variable || "Santos"
console.log("Nombe: ", nombre)