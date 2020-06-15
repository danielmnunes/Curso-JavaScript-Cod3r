// Armazenando uma função em uma variável
let imprimaSoma = function(a, b){
    console.log(a + b)
}

imprimaSoma(2, 3)

// Armazenando uma função arrow em uma variável
let arrowImpraSoma = (a, b) => {
    console.log(a + b)
}

arrowImpraSoma(2, 3)


// Armazenando uma função arrow com retorno implícito em uma variável
let impliArrowImpraSoma = (a, b) => console.log(a + b)

impliArrowImpraSoma(2, 3)