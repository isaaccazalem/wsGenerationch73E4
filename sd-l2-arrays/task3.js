const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Inserta el número 8 en la posición correcta sin eliminar ningún elemento
arr.splice(7, 0, 8)

// Muestra el array con el número faltante ya incluido
arr.forEach(element => console.log(element))