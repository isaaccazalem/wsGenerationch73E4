// Escribe tu código debajo de esta línea.

// El constructor guarda los lugares de inicio y destino del viaje.
function Journey(start, end) {
	this.start = start
	this.end = end
}

// Se leen ambos lugares desde los argumentos de ejecución.
const from = process.argv[3]
const to = process.argv[4]

// Escribe tu código encima de esta línea.

const travel = new Journey(from, to)

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")