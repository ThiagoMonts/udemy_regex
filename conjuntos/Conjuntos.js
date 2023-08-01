const texto = '1,2,3,4,5,6,a.b c!d?e[f'

// Para definir uma classe (ou conjunto) de caracteres usa []
const regexPares = /[02468]/g // Cria um grupo de números pares
console.log(texto.match(regexPares))  // Procura todos os números pares do grupo

const texto2 = 'João não vai passear na moto.'
const regexComESemAcento = /n[aã]/g // Cria um grupo de letras n e a letra a com e sem acento
console.log(texto2.match(regexComESemAcento)) // Procura todas as letras n e a letra a com e sem acento