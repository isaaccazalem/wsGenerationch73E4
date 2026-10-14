export class FriendNames {
  constructor(name1, name2, name3) {
    // Cada argumento se guarda en una propiedad con el nombre solicitado.
    this.name1 = name1;
    this.name2 = name2;
    this.name3 = name3;
  }
}

// Pruebas
const amigos = new FriendNames("Ana", "Luis", "Sofi");
console.log(amigos.name1); // Ana
console.log(amigos.name2); // Luis
console.log(amigos.name3); // Sofi