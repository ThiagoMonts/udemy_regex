const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// * -> Zero ou Mais ocorrências
const regex = /fogo*/gi // Vai pegar o 'o' zero ou mais vezes (Guloso)
console.log(texto1.match(regex))
console.log(texto2.match(regex))