export function ageCalculator(year, month, day) {
	const today = new Date();
	const birthday = new Date(year, month, day);
	let age = today.getFullYear() - birthday.getFullYear();

	// Si el cumpleanos de este ano aun no pasa, se resta un ano.
	const birthdayHasNotOccurred =
		today.getMonth() < birthday.getMonth() ||
		(today.getMonth() === birthday.getMonth() &&
			today.getDate() < birthday.getDate());

	if (birthdayHasNotOccurred) {
		age--;
	}

	return age;
}
console.log(ageCalculator(2005, 5, 10));