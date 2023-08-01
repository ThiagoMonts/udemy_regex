const textoUmaLinha = '...' // Aspas simples ou duplas

const textoMultiLinha = `
    linha 1
    linha 2
`  // Quando o texto tiver mais de uma linha, usa-se crase (template string)

// Cuidado com o tab!
console.log('	'.match(/\s/g)) // Procura todos os espaços em branco