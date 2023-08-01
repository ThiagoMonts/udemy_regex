const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> Zero ou Uma ocorrência (opcional)
const regex = /fogo?/gi // O caractere 'o' é opcional - Pode ter um 'o' ou nenhum 'o'
console.log(texto1.match(regex))
console.log(texto2.match(regex))