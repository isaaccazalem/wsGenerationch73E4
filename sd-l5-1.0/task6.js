export function rubricExcellent(score) {
	
	if (score > 8) {
		return "Excellent";
	}

	return score >= 5 ? "Pass" : "Fail";
}

// pruebas
console.log(rubricExcellent(9));  // Excellent
console.log(rubricExcellent(8));  // Pass
console.log(rubricExcellent(6));  // Pass
console.log(rubricExcellent(4));  // Fail