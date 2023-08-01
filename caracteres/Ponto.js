// . é um coringa, válido para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g)) // Procura o número 1, seguido de qualquer caractere, seguido do número 2
console.log(texto.match(/1\.2/g)) // Procura o número 1.2 literalmente
console.log(texto.match(/1..2/g)) // Procura o número 1, seguido de dois caracteres, seguido do número 2
console.log(texto.match(/1..,/g)) // Procura o número 1, seguido de dois caracteres, seguido de vírgula

const notas = '8.3,7.1,8.8,10.0'
console.log(notas.match(/8../g)) // Procura o número 8, seguido de dois caracteres, pode ser ponto ou não, seguido de qualquer caractere
console.log(notas.match(/.\../g)) // Procura qualquer caractere, seguido de ponto literal, seguido de qualquer caractere