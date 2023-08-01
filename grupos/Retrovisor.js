const texto1 = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'
// console.log(texto1.match(/<(\w+)>/g)) // Pega os grupos de <b>, <strong>, <div>
// // O \w significa qualquer caracter alfanumérico, o + significa um ou mais caracteres
// console.log(texto1.match(/<(\w+)>.*<\/\1>/g)) // O \1 significa o retrovisor, ou seja, o primeiro grupo, vai retornar as tags que tem o mesmo nome de abertura e fechamento

const texto2 = 'Lentamente é mente muito lenta.'
// console.log(texto2.match(/(lenta)(mente)/gi)) // Pega os grupos de lenta e mente
// console.log(texto2.match(/(lenta)(mente).*/gi)) // Pega os grupos de lenta e mente e o que vier depois
// console.log(texto2.match(/(lenta)(mente).*\2/gi)) // Pega os grupos de lenta e mente e o que vier depois, mas só se tiver o 2 depois
// console.log(texto2.match(/(lenta)(mente).*\2.*\1/gi)) // Tenho 2 grupos, um formado pela palavra lenta e outro pela palavra mente, ele armazenou a palavra lenta no retrovisor 1 e a palavra mente no retrovisor 2
// console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi)) // Pega a frase inteira, incluindo o ponto final

// ?: não armazena o grupo
// console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // Não armazena o grupo lenta, mas armazena o grupo mente e o que vier depois

// console.log(texto2.match(/(lenta)(mente)/gi)) // Pega lentamente
// console.log(texto2.match(/(lenta)(mente)?/gi)) // Pega lentamente e lenta, já que o mente é opcional

// console.log(texto2.replace(/(lenta)(mente)/gi, '$2')) // Substitui a palavra pelo segundo grupo (retrovisor), ou seja, mente

const texto3 = 'abcdefghijkll'
console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(h)(i)(j)(k)(l)\12/g)) // Suporta uma quantidade de grupos (retrovisores) maior que 9, entigamente esse era o máximo