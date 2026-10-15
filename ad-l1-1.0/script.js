// 1. Modificar el primer Hola Mundo a Adiós
document.getElementById("red").textContent = "Adiós";

// 2. Cambiar color de un encabezado a naranja
const encabezados = document.querySelectorAll("h1");
encabezados[3].style.color = "orange"; // el 4to H1

// 3. Encabezado clickeable que cambia a marrón
const clickable = document.getElementById("clickable");
clickable.addEventListener("click", function() {
    this.style.color = "brown";
});