function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Escribe tu código debajo de esta línea.
  
  // Los argumentos del usuario están después del número de tarea.
  const newMail = new Mail(process.argv[3], process.argv[4])
  
  // Escribe tu código encima de esta línea.
  
  console.log(newMail.subject + ": " + newMail.message)