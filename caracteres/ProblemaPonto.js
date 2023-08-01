const texto = 'Bom\ndia'
console.log(texto.match(/./gi)) // Procura qualquer caractere, exceto quebra de linha
console.log(texto.match(/.../gi)) // O ponto não engloba a quebra de linha

// dotall - Algumas linguagens tem uma flag /exp/s, mas JS não!