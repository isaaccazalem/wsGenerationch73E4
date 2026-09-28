
// Escribe tu código debajo de esta línea.

// Cada producto guarda su nombre y la cantidad que se necesita.
function ShoppingList() {
	this.items = []

	this.addItem = function (name, quantity) {
		const existingItem = this.items.find(
			(item) => item.name.toLowerCase() === name.toLowerCase()
		)

		if (existingItem) {
			existingItem.quantity += quantity
		} else {
			this.items.push({ name, quantity })
		}
	}
}

const prompt = require("prompt-sync")()
const numberOfItems = Number(prompt("¿Cuántos productos distintos necesitas? "))
const shoppingList = new ShoppingList()

for (let index = 0; index < numberOfItems; index++) {
	const name = prompt(`Nombre del producto ${index + 1}: `)
	const quantity = Number(prompt(`Cantidad de ${name}: `))
	shoppingList.addItem(name, quantity)
}

console.log(shoppingList.items)

// Escribe tu código encima de esta línea.

