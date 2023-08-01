const texto = `1,2,3,4,5,6,a.b c!d?e\r\f    -
f_g`

console.log(texto.match(/\d/g)) // Procura todos os dígitos - números [0-9]
console.log(texto.match(/\D/g)) // Procura tudo que não é dígito - não números [^0-9]

console.log(texto.match(/\w/g)) // Procura tudo que é caractere - letras e números [a-zA-Z0-9_]
console.log(texto.match(/\W/g)) // Procura tudo que não é caractere - não letras e números [^a-zA-Z0-9_]

console.log(texto.match(/\s/g)) // Procura tudo que é espaço em branco [ \t\n\r\f]
console.log(texto.match(/\S/g)) // Procura tudo que não é espaço em branco [^ \t\n\r\f]

// \b é um borda que não é um caractere, é uma posição que não é uma palavra
// \B é tudo que não é borda