export function rubricPerfect(score) {
	
	const numericScore = Number(score);

	if (numericScore === 11) {
		return "Perfect";
	}

	if (numericScore > 8) {
		return "Excellent";
	}

	return numericScore >= 5 ? "Pass" : "Fail";
}

// pruebas
console.log(rubricPerfect(11)); // Perfect
console.log(rubricPerfect(5));  // Pass
console.log(rubricPerfect(9));  // Excellent
console.log(rubricPerfect(2));  // Fail