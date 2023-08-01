const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi)) // Pegando todas as palavras

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi)) // Procure por palavras que tenham uma virgula na frente
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi)) // Procure por palavras que tenham um ponto na frente
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi)) // Procure por palavras que tenham uma virgula e um mas na frente

// Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)) // Procure por palavras que não tenham uma virgula na frente
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi)) // Procure por palavras que não tenham uma virgula na frente e que tenham um espaço ou um ponto na frente
