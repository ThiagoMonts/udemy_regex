const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) // Não precisa de escape dentro do conjunto
// Dentro de um conjunto o ponto se comporta de maneira literal. Não é um metacaractere

console.log(texto.match(/[+.?*$]./g)) // Procura todos os caracteres que estão dentro do conjunto e o próximo caractere

console.log(texto.match(/[$-?]/g)) // Isso é um intervalo (range)
// Nesse caso o - não é um metacaractere dentro do conjunto

// Não é um intervalo (range)...
console.log(texto.match(/[$\-?]/g)) // O - é caractere literal dentro do conjunto
console.log(texto.match(/[-?]/g)) // O - é caractere literal dentro do conjunto

// Podem precisar de escape dentro do conjunto: - [ ] ^