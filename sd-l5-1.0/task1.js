export function costCalculator(transactionAmount) {
  const amount = Number(transactionAmount);
  const total = amount + 3 + amount * 0.01;
  return Number(total.toFixed(2));
}
//pruebas
console.log(costCalculator(101)); 