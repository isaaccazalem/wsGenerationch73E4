export function rubricPassFail(score) {
	// Un resultado de 5 o mas alcanza el minimo para aprobar.
	return score >= 5 ? "Pass" : "Fail";
}

// --- PRUEBAS ---
console.log(rubricPassFail(8)); // Pass
console.log(rubricPassFail(5)); // Pass
console.log(rubricPassFail(4.9)); // Fail