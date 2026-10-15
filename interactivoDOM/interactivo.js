// captura de los elementos
const titulo = document.getElementById("titulo");
const botonAgregar = document.getElementById("agregar");
const contenedorProyectos = document.getElementById("proyectos");

// actualizar titulo
titulo.innerText = "Mis Proyectos - Actualizado";

// Función para cuando den clic en agregar
function manejarAgregarProyecto(evento) {
    console.log("¡Me dieron clic!"); // Puse esto para probar si entra a la función
    
    // Creo la tarjeta
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    tarjeta.innerHTML = `
        <p>Proyecto nuevo</p>
        <button class="btn-eliminar">Eliminar</button>
    `;
    
    // Agrego la tarjeta al contenedor
    contenedorProyectos.appendChild(tarjeta);

    // evento al boton eliminar
    const botonEliminar = tarjeta.querySelector(".btn-eliminar");
    botonEliminar.addEventListener("click", manejarEliminarTarjeta);
}

// Función para eliminar la tarjeta
function manejarEliminarTarjeta(evento) {
    const tarjetaAEliminar = evento.target.parentElement;
    tarjetaAEliminar.remove();
}

// Le asigno el evento al botón principal, aquin me perdi un poco por que no me funcionaba bienpor eso agrege un log para ver que pasaba
if (botonAgregar) {
    botonAgregar.addEventListener("click", manejarAgregarProyecto);
} else {
    console.log("¡No encontré el botón de agregar!");
}