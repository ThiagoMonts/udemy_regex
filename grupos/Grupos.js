const texto1 = 'O José Simão é muito engraçado... hehehehehehe'
console.log(texto1.match(/(he)/g)) // Pega quantos grupos de 'he' tem na string
console.log(texto1.match(/(he)+/g)) // Pega o agrupamento de 'he' na string

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g)) // Pega os grupos de http://, www., .info, .com.br, .com.ag