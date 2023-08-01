const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// Quantificadores SÃO gulosos (greedy)...
console.log(texto.match(/<div>.+<\/div>/g)) // Retorna tudo que está entre a primeira tag <div> e a última tag </div>
console.log(texto.match(/<div>.*<\/div>/g)) // Retorna tudo que está entre a primeira tag <div> e a última tag </div>
console.log(texto.match(/<div>.{0,100}<\/div>/g)) // Retorna tudo que está entre a primeira tag <div> e a última tag </div>

// Quantificadores NÃO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g)) // Retorna tudo que está entre a primeira tag <div> e a primeira tag </div>
console.log(texto.match(/<div>.*?<\/div>/g)) // Retorna tudo que está entre a primeira tag <div> e a primeira tag </div>
console.log(texto.match(/<div>.{0,100}?<\/div>/g)) // Retorna tudo que está entre a primeira tag <div> e a primeira tag </div>