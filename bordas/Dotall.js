const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)) // Problema do dotall - O . não resolve o \n, nesse caso retornaria null
console.log(texto.match(/^r[\s\S]*r$/gi)) // [\s\S] resolve o problema do dotall