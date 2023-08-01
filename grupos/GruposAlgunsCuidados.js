const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

console.log(texto.match(/[(abc)]/gi)) // Não é um grupo, é um conjunto de caracteres, dentro de um conjunto não existe grupo
console.log(texto.match(/([abc])/gi)) // É um grupo, dentro de um grupo existe um conjunto
console.log(texto.match(/(abc)/gi)) // É um grupo, dentro de um grupo existe um conjunto