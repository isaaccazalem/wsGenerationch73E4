// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
  "Fizz", // 3
  "Buzz", // 5
  "Woof", // 7
  "Bark", // 11
  "Awoo", // 13
  "Bang", // 17 - agrega más aquí si quieres
  "Neko"// - nueva palabra
];

let primes = [3, 5, 7, 11, 13, 17, 19]; //19 para agregar Neko

function generarFizzBuzz(n) {
  let output = "";
  for (let j = 0; j < primes.length; j++) {
    if (n % primes[j] === 0) {
      output += buzzWords[j];
    }
  }
  return output === ""? n : output;
}

//Generamos toda la secuencia en una matriz
let totalLineas = 105;
let lista = [];

for (let i = 1; i <= totalLineas; i++) {
  lista.push(generarFizzBuzz(i));
}

console.log(lista);

//Para ver una línea específica (ej. 105)
let lineaBuscada = 105;
console.log(`Línea ${lineaBuscada}: ${lista[lineaBuscada - 1]}`);