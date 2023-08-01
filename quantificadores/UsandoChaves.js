const texto = "O João recebeu 120 milhões apostando 6 9 21 23 45 46"

// Para definir um quantificador usa-se {}
console.log(texto.match(/\d{1,2}/g)) // Retorna todos os números com 1 ou 2 dígitos
console.log(texto.match(/[0-9]{2}/g)) // Retorna todos os números com 2 dígitos
console.log(texto.match(/\d{1,}/g)) // Retorna todos os números com 1 ou mais dígitos

console.log(texto.match(/\w{7}/g)) // Retorna todas as palavras com 7 caracteres
console.log(texto.match(/[\wõ]{7,}/g)) // Retorna todas as palavras, considerando também o 'õ', com 7 ou mais caracteres

// No futuro...
console.log(texto.match(/\b\d{1,2}\b/g)) // Retorna todos os números com 1 ou 2 dígitos que estão dentro de uma palavra
console.log(texto.match(/\b[\wõ]{7}\b/g)) // Retorna todas as palavras com 7 caracteres que estão dentro de uma palavra