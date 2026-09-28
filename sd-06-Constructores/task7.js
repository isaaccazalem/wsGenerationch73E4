
// Escribe tu código debajo de esta línea.

// El auto conserva sus datos principales y los muestra como un objeto.
function Car(make, model, year, color, doors, mileage, engineType) {
	this.make = make
	this.model = model
	this.year = Number(year)
	this.color = color
	this.doors = Number(doors)
	this.mileage = Number(mileage)
	this.engineType = engineType
}

const prompt = require("prompt-sync")()
const car = new Car(
	prompt("Marca: "),
	prompt("Modelo: "),
	prompt("Año: "),
	prompt("Color: "),
	prompt("Número de puertas: "),
	prompt("Kilometraje: "),
	prompt("Tipo de motor (combustión o eléctrico): ")
)

console.log(car)

// Escribe tu código encima de esta línea.

