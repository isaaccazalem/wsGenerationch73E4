const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Añade un valor a una fila, agrega una fila nueva, elimina un elemento y invierte otra fila
  arr[0].push(10)
  arr.push([30,31,32])
  arr[1].splice(2, 1)
  arr[2].reverse()
  console.log(arr)