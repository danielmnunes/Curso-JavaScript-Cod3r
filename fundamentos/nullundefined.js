let objeto = {}

objeto.nome = 'Daniel Nunes'
objeto.idade = 24
objeto.cpf = '123.456.789-10'

// Passagem por referência, funciona em objetos e funções
// Agora registro e objeto apontam para o mesmo local na memória
let registro = objeto

// Passagem por valor, funciona para tipos primitivos da linguagem
let num1 = 1
let num2 = num1
num2++
// num2 é uma copia independente de num1
console.log(num1)
console.log(num2)

// Criando um objeto sem inicializar, resultado é undefined
let obj
console.log(obj) // undefined

let nulo = null // Ausência de valor, a variável não aponta para nenhum lugar da memória
console.log(nulo)







