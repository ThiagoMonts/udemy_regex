const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'
console.log(texto.match(/[À-ü]/g)) // Conjunto unicode
// Por padrão o /w não considera acentos, para considerar acentos é necessário usar o unicode