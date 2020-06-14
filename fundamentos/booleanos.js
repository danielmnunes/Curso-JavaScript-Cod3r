let efalse = false
let etrue = true

// Valores que são true em JS
console.log(!!true) // O própio true
console.log(!!3) // Qualquer número inteiro diferente de 0
console.log(!!'texto') // Uma string não vazia
console.log(!![]) // Um array
console.log(!!{}) // Um objeto
console.log(!!Infinity) // O infinito

// Valores que são false em JS
console.log(!!false) // o própio false
console.log(!!0) // O 0
console.log(!!null) // O null
console.log(!!NaN) // O NaN
console.log(!!undefined) // O undefined


// Valor padrão
let nome = 'Daniel'
// Se o valor de nome for vazio. imprime Desconhecido
console.log(nome || 'Desconhecido')