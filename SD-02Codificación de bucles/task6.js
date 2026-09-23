// Refer to Task 6 in your Instructions to complete this task

function getFizzBuzzWoof(i) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Woof";
  return output === ""? i : output;
}

// Creamos la matriz vacía
let lista = [];

// Generamos hasta 106 y lo asignamos a la lista
for (let i = 1; i <= 105; i++) {
  lista.push(getFizzBuzzWoof(i));
}

//lista
console.log(lista);


// Para ver un número específico:
console.log(lista[105]); 