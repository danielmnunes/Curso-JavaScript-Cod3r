console.log(typeof Object) // Object é uma function

class Produto{}
console.log(typeof Produto) // Classe é uma function

// Criando uma função
function isoma(a, b){
    console.log(a+b)
}

isoma(2, 3) // Chamada com todos os parametros -> 5
isoma(2) // Chamada faltando parametros -> NaN
isoma(2, 3) // Chamada com mais parametros -> 5


// Criando uma função com valor padrão
function isoma(a=1, b=1){
    console.log(a+b)
}
isoma(2, 3) // Chamada com todos os parametros -> 5
isoma(2) // Chamada faltando parametros -> 3
isoma(2, 3) // Chamada com mais parametros -> 5
isoma() // -> 2
