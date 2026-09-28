// Escribe tu código debajo de esta línea.

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    // Este método muestra el asunto y el mensaje en una sola línea.
    this.printMail = function () {
      console.log(this.subject + ": " + this.message)
    }
  }
  
  const newMail = new Mail(process.argv[3], process.argv[4])
  
  // Escribe tu código encima de esta línea.
  
  newMail.printMail()