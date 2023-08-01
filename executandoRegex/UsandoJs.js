const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto)) //Testa se a regex está presente no texto
console.log(regexNove.exec(texto)) //Executa a regex no texto

const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras)) //Retorna um array com todas as ocorrências da regex no texto
console.log(texto.search(regexLetras)) //Retorna o índice do primeiro elemento encontrado
console.log(texto.replace(regexLetras, 'Achei')) //Substitui todas as ocorrências da regex no texto
console.log(texto.split(regexLetras)) //Divide o texto em um array, usando a regex como separador