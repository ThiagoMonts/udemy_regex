const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> Uma ou Mais ocorrências
const regex = /fogo+/gi // O caractere 'o' pode ter um ou mais 'o'
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g)) // Retorna todos os números
console.log(texto3.match(/[0-9]+/g)) // Retorna todos os números juntos

// Mesma expressão acima, só que com o shorthand:
console.log(texto3.match(/\d/g)) // Retorna todos os números
console.log(texto3.match(/\d+/g)) // Retorna todos os números juntos