const texto = 'a   b'
console.log(texto.match(/a   b/))
console.log(texto.match(/a\s\s\sb/))

// No futuro...
console.log(texto.match(/a\s+b/)) // Procura o caractere a, seguido de um ou mais espaços em branco, seguido do caractere b
console.log(texto.match(/a {3}b/)) // Procura o caractere a, seguido de 3 espaços em branco, seguido do caractere b
console.log(texto.match(/a\s{3}b/)) // Procura o caractere a, seguido de 3 espaços em branco, seguido do caractere b