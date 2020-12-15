// Richiesta mail
var mail = prompt('Ciao! Qual è la tua mail?')
console.log('La sua mail è: ' + mail);


// mail giuste
var mailAmmesse = ['alfredo@gmail.com', 'enrico@hotmail.com', 'michele@libero.it'];
if (mailAmmesse.indexOf(mail) !== -1) {
  alert('Congratulazioni, puoi accedere e giocare')
} else {
  alert('Errore, inserire una mail valida!')
}

// gioco dei dadi random
var player = [1,2,3,4,5,6]; // numeri da 1 a 6 per essere randomizzati
var cpu = [1,2,3,4,5,6]; // numeri da 1 a 6 per essere randomizzati
var playerResult;
var cpuResult;
