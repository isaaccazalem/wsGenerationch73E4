// Refer to Task 5 in your Instructions to complete this task

function getFizzBuzzWoof(i) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Woof";
  return output === ""? i : output;
}

// Opcion 1: cuantas lineas quieres imprimir
let total = parseInt(prompt("cuantas lineas quieres generar? (ejp. 105)"), 10);

for (let i = 1; i <= total; i++) {
  console.log(getFizzBuzzWoof(i));
}

// Opcion 2: una linea especifica que quieres imprimir
let line = parseInt(prompt("Que linea en especifico quieres imprimir? (ejp. 105)"), 10);
console.log(`Line ${line}: ${getFizzBuzzWoof(line)}`);