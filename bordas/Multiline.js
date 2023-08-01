const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g)) // Mostra todas as quebras de linha
console.log(texto.match(/^(\w).+\1$/gi)) // Problema do dotall - O . não resolve o \n, nesse caso retornaria null
console.log(texto.match(/^(\w).+\1$/gim)) // A flag m indica multiplas linhas, ou seja, o ^ e $ vão considerar cada linha, resolve o problema do dotall
console.log(texto.match(/^(\w).+\1\.$/gim)) // Se as expressões tivessem um ponto no final de cada linha, o \. resolveria o problema do dotall