const texto = 'Você precisa responder sim, não ou não sei!'
console.log(texto.match(/sim|não|sei/g)) // Procura a palavra sim OU a palavra não OU a palavra sei
// | (pipe) - Alternativa (OU)