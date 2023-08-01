const texto1 = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto1.match(/\bdia\w+/gi)) // \b é a borda, ou seja, a palavra deve começar com dia, como tem o +, a palavra deve ter pelo menos um caractere depois de dia, por isso não pega a palavra dia, mas se eu quiser pegar a palavra dia, eu tiro o + e coloco o * (zero ou mais)
console.log(texto1.match(/\w+dia\b/gi)) // A palavra deve terminar com dia
console.log(texto1.match(/\w+dia\w+/gi)) // A palavra deve começar ou terminar com dia
console.log(texto1.match(/\bdia\b/gi)) // A palavra deve ser dia

// borda é não \w, que é [^A-Za-z0-9_]... temos problemas com acentos!

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi)) // Pega dia 4x, o dia, média, pois ele considera o é uma borda, wikipedia, pois ele considera o é uma borda, bom-dia, pois ele considera o - uma borda. Ou seja, o \b considera o é e o - como borda, o que não é o que queremos

console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) // Pega todos os dias, inclusive com a vírgula, pois o \S considera a vírgula como não espaço, ou seja, considera a vírgula como caractere
console.log(texto2.match(/([\wÀ-ú-]*)?dia([\wÀ-ú-]*)?/gi)) // Pega todos os dias, mas não pega a vírgula em diafragma.