// LISTA COGNOMI
var cognomi = ['zorro', 'lelardo', 'sagnale', 'datome', 'fige', 'verro', 'gagnale'];
// CHIEDERE COGNOME
var cognomeInserito = prompt('Inserisci qui il tuo cognome');
// INSERIRE COGNOME IN ARREY
cognomi.push(cognomeInserito);
// CREARE LISTA DI COGNOMI IN ORDINE ALFABETICO
cognomi.sort();
console.log(cognomi);
// STAMPARE LISTA
for (var i = 0; i < cognomi.length; i++) {
  var cognomiOk = document.getElementById('lista_cognomi').innerHTML;
  document.getElementById('lista_cognomi').innerHTML =  cognomiOk + '<li>'+ " " + cognomi[i] + '</li>';
}
// STABILISCI POSIZIONE COGNOME cognomeInserito
document.getElementById('posizione').innerHTML = 'La posizione del tuo cognome è la numero ' +  (cognomi.indexOf(cognomeInserito)+1);
