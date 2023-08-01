const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'

const regex = /casa/gi // Flags: g = global, i = ignore case sensitive
console.log(texto.match(regex)) // Procura todas as ocorrências de casa, ignorando maiúsculas e minúsculas
console.log(texto.match(/a b/)) // Procura a ocorrência de a b