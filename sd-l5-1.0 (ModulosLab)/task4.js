export class FriendAge {
  constructor(name, year, month, day) {
    this.name = name;
    this.year = year;
    this.month = month - 1; // JavaScript cuenta los meses de 0 a 11, por eso le restamos 1.
    this.day = day;
  }
  // Esto es lo que calcula cuántos años tiene hoy.
  returnAge() {
    const today = new Date();
    const birthday = new Date(this.year, this.month, this.day);
    let age = today.getFullYear() - birthday.getFullYear();

    const birthdayHasNotOccurred =
      today.getMonth() < birthday.getMonth() ||
      (today.getMonth() === birthday.getMonth() &&
        today.getDate() < birthday.getDate());

    if (birthdayHasNotOccurred) {
      age--;
    }

    return `${this.name} is ${age} today!`;
  }
}

// Pruebas
const amigo = new FriendAge("Luis", 2005, 5, 10);
console.log(amigo.returnAge());