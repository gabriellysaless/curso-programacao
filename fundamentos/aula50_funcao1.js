// Função sem Retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma (5, 2)
imprimirSoma (5)
imprimirSoma(5, 2, 6)
imprimirSoma ()

//Função com Retorno
function soma (a, b = 1){
    return a + b
}

console.log (soma(5, 2))
console.log (soma(5))