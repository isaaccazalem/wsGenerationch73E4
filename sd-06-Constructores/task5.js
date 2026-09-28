// Escribe tu código debajo de esta línea.

// Se usa la entrada recibida por consola o los argumentos del comando.
const prompt = require("prompt-sync")()
const numberOfFriends = Number(process.argv[3] || prompt("¿Cuántos nombres quieres agregar? "))
const friends = []

for (let index = 0; index < numberOfFriends; index++) {
	const name = process.argv[index + 4] || prompt(`Escribe el nombre ${index + 1}: `)
	friends.push(name)
}

function FriendsList(names) {
	this.names = names
}

const friendsList = new FriendsList(friends)
console.log(friendsList.names)

// Escribe tu código encima de esta línea.

