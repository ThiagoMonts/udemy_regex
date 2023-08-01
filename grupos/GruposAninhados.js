const texto = 'supermercado hipermercado minimercado mercado'

console.log(texto.match(/(super|hiper|mini)?mercado/g)) // Trata-se de um grupo opcional, seguido de mercado
console.log(texto.match(/((hi|su)per|mini)?mercado/g)) // Grupo dentro de outro grupo (hiper ou super) ou mini, todos esses opcionais, seguido de mercado