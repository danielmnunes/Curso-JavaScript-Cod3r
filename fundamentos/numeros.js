const peso1 = 1.0 // Definindo um número
const peso2 = Number('2.0') // Outra forma de definir um número

console.log(peso1, peso2)

// Testando a tipagem de uma variável
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const aval1 = 9.2
const aval2 = 6.7

const media = (peso1 * aval1 + peso2 * aval2) / (peso1 + peso2)

// Definindo a quantidade de casas decimais
console.log(media.toFixed(2))

// Divisão por zero roda
console.log(1/0)

// Divisão por string contendo números roda
console.log('10'/2)

// Produto de strigns com números, retorna NaN
console.log('show'*2)


