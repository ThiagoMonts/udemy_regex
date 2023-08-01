// g - global
// i - ignore case

const texto = 'Carlos assinou o abaixo-assinado.'
console.log(texto.match(/C|ab/))
console.log(texto.match(/c|ab/i))
//Entre as barras fica a expressão regular e após as barras ficam as flags	
//A flag i serve para ignorar o case sensitive
console.log(texto.match(/ab|c/gi))
//A flag g serve para procurar todas as ocorrências, não apenas a primeira
