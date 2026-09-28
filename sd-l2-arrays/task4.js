const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14]

// Elimina uno de los dos números duplicados conservando el resto del array
arr.splice(5, 1)

// Muestra el array sin duplicados
arr.forEach(element => console.log(element))