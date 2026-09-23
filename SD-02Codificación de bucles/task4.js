// Refer to Task 4 in your Instructions to complete this task

// Tarea 4: añade Woof con orden Fizz + Buzz + Woof
for (let i = 1; i <= 105; i++) {
  let output = "";

  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  if (i % 7 === 0) output += "Woof";

  if (output === "") {
    console.log(i);
  } else {
    console.log(output);
  }
}