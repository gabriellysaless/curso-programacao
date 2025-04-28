// Armazenando uma função em uma variável
const imprimirSoma = function (a, b){
    console.log (a + b)
}

imprimirSoma(5, 2)

// Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}

console.log(soma(5, 2))

//Retorno Implícito (quando não tem as chaves significa que a função tem apenas uma única linha, ou seja, retorna uma única sentença de código)
const calculo = (a, b) => a + b

console.log(calculo(5, 2))

//Diminuindo ainda mais (quando temos apenas um parâmetro)
const frase = a => console.log(a)
frase('Funcionou')