const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/\D/g)) // Procura tudo que não é dígito - não números [^0-9]
console.log(texto.match(/[^0-9]/g)) // Procura tudo que não é dígito - não números [^0-9]
console.log(texto.match(/[^\d!\?\[\s,\.]/g)) // Procura tudo que não é dígito,exclamação, interrogação, colchetes, espaço em branco, vírgula e ponto. [^0-9!\?\[\s,\.]

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g)) // Remove tudo que está dentro do intervalo [!-/:-@] e os espaços em branco