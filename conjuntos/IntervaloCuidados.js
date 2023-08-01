const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g)) // Procura todas as letras de a até c
console.log(texto.match(/a-c/g)) // Procura a letra a seguida da letra c (não é um intervalo)

console.log(texto.match(/[A-z]/g)) // Intervalos usam a ordem da tabela UNICODE

// Tem que respeitar a ordem da tabela UNICODE
// console.log(texto.match(/[a-Z]/g)) // Gera um erro - Ordem errada
// console.log(texto.match(/[4-1]/g)) // Gera um erro - Ordem errada