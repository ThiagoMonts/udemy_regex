const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
` 

//console.log(texto.match(/[a-zA-Z0-9]/g)) // Pega todas as palavras e números

//console.log(texto.match(/[a-zA-Z0-9]+@/g)) // Pegando todas as palavras e números que tem @

//console.log(texto.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+/g)) // Pegando todas as palavras que tem @ e depois outra palavra .

// console.log(texto.match(/[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]{2,4}/g)) // Pegando todas as palavras que tem @ e depois outra palavra, depois a palavra depois do ponto .

// Mesma expressão acima, mas com shorthand:
//console.log(texto.match(/\w+@\w+\.\w{2,4}/g)) // Pegando todas as palavras que tem @ e depois outra palavra, depois a palavra depois do ponto .

//console.log(texto.match(/[\w.]+@\w+\.\w{2,4}/g)) // Adicionando o ponto no meio da expressão

console.log(texto.match(/[\w.]+@\w+\.\w{2,4}\.?\w{0,2}/g))

// No futuro, veremos como adicionar o ponto no meio da expressão.
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g)) // Criando um grupo opcional para o .br