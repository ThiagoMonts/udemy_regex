// . ? * + - ^ $ | [ ] { } ( ) \ :
const texto = '1,2,3,4,5,6,a.b c!d?e'
const regexPonto = /\./g // O ponto é um metacaractere, então precisa ser escapado com a barra invertida, se você quiser procurar o ponto literalmente
console.log(texto.split(regexPonto)) // Separa o texto em um array, usando o ponto como separador

const regexSimbolos = /,|\.|\?|!| /g // Procura por vírgula OU ponto OU interrogação OU exclamação OU espaço. Como o ponto e a interrogação são metacaracteres, precisam ser escapados com a barra invertida
console.log(texto.split(regexSimbolos)) // Separa o texto em um array, usando os símbolos como separadores

//Escape - \ (contra barra)
// Quando você quiser procurar um metacaractere literalmente, você precisa usar o escape (barra invertida)