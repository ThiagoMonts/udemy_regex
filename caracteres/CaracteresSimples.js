const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/
console.log(texto.split(regexVirgula)) // Separa o texto em um array, usando a vírgula como separador
console.log(texto.match(regexVirgula)) // Procura a primeira vírgula no texto
console.log(texto.match(/,/g)) // Procura todas as vírgulas no texto
console.log(texto.match(/A/g)) // Procura a letra A no texto
console.log(texto.match(/A/gi)) // Procura a letra A no texto, ignorando o case sensitive
console.log(texto.match(/2/g)) // Procura o número 2 no texto
console.log(texto.match(/b c!d/)) // Procura a string b c!d no texto