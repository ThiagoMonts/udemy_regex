const texto = 'Lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'
console.log(texto.match(/\.mp3/g)) // Procura o ponto literal, seguido de mp3

// No futuro...
console.log(texto.match(/\w+\.mp3/g)) // Procura um ou mais caracteres, seguido de ponto literal, seguido de mp3, extraindo apenas o nome dos arquivos