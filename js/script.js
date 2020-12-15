// Richiesta mail
var mail = prompt('Ciao! Qual è la tua mail?') //richiesta mail

// mail giuste
var mailAmmesse = ['alfredo@gmail.com', 'enrico@hotmail.com', 'michele@libero.it']; // mail ammesse
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


//risultati
playerResult = Math.floor((Math.random() * player.length) + 1); //risultato numero random da 1 a 6 player
cpuResult = Math.floor((Math.random() * cpu.length) + 1); //risultato numero random da 1 a 6 CPU
alert("Il risultato del tuo tiro è: " + playerResult);
alert("Il risultato del tiro del PC è: " + cpuResult);
