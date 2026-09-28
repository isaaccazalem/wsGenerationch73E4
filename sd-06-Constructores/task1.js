function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Escribe tu código debajo de esta línea.
  
  // Se crea el correo con el asunto y el mensaje solicitados.
  const newMail = new Mail("hello", "world")
  
  // Escribe tu código encima de esta línea.
  
  console.log(newMail.subject + ": " + newMail.message)