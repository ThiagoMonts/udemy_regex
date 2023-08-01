const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi)) // Mostra todas as letras r, maiúsculas e minúsculas
console.log(texto.match(/^r/gi)) // Fora de um conjunto, o ^ é um metacaractere de início de linha/string
console.log(texto.match(/r$/gi)) // Fora de um conjunto, o $ é um metacaractere de fim de linha/string
console.log(texto.match(/^r.*r$/gi)) // Problema do dotall - O . não resolve o \n, nesse caso retornaria null