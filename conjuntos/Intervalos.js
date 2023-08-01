const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/[a-z]/g)) // Procura todas as letras de a até z
console.log(texto.match(/[b-d]/g)) // Procura todas as letras de b até d
console.log(texto.match(/[2-4]/g)) // Procura todos os números de 2 até 4
//Obs As bordas são consideradas no intervalo

console.log(texto.match(/[A-Z1-3]/gi)) // Procura todas as letras de A até Z e os números de 1 até 3 ignorando o case sensitive