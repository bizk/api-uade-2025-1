// script.js
let contador = 0;
const span = document.getElementById("contador");
const boton = document.getElementById("sumar");

boton.addEventListener("click", () => {
    contador++;
    span.innerText = contador;
});