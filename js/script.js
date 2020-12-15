// Richiesta mail
var mail = prompt('Ciao! Qual è la tua mail?')
console.log('La sua mail è: ' + mail);

// Controllo mail giusta
if (mail === 'gmail' || mail === 'hotmail') {
  alert('Congratulazioni, puoi accedere e giocare')
} else {
  alert('Errore, inserire una mail valida!')
}
