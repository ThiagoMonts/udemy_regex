const texto = `
ca  r       
r   o s!
`

console.log(texto.match(/ca/)) // Procura o caractere c, seguido do caractere a
console.log(texto.match(/ca\t/)) // Procura o caractere c, seguido do caractere a, seguido do tab
console.log(texto.match(/ca\tr\n/)) // Procura o caractere c, seguido do caractere a, seguido do tab, seguido de quebra de linha
console.log(texto.match(/ca\tr\nr/)) // Procura o caractere c, seguido do caractere a, seguido do tab, seguido de quebra de linha, seguido do caractere r
console.log(texto.match(/ca\tr\nr\t/)) // Procura o caractere c, seguido do caractere a, seguido do tab, seguido de quebra de linha, seguido do caractere r, seguido do tab
console.log(texto.match(/ca\tr\nr\to/)) // Procura o caractere c, seguido do caractere a, seguido do tab, seguido de quebra de linha, seguido do caractere r, seguido do tab, seguido do caractere o
console.log(texto.match(/ca\tr\nr\to\s/)) // Procura o caractere c, seguido do caractere a, seguido do tab, seguido de quebra de linha, seguido do caractere r, seguido do tab, seguido do caractere o, seguido de espaço
console.log(texto.match(/ca\tr\nr\to\ss/)) // Procura o caractere c, seguido do caractere a, seguido do tab, seguido de quebra de linha, seguido do caractere r, seguido do tab, seguido do caractere o, seguido de espaço, seguido do caractere s
console.log(texto.match(/ca\tr\nr\to\ss!/)) // Procura o caractere c, seguido do caractere a, seguido do tab, seguido de quebra de linha, seguido do caractere r, seguido do tab, seguido do caractere o, seguido de espaço, seguido do caractere s, seguido do caractere !


// \s é um atalho para o caractere espaço em branco