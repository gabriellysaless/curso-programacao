function soma() {
    let soma = 0
    for (i in arguments) { // arguments é um array interno da função, toda função tem esse array disponível. Quando nenhum parametro é passado esse array é vazio, mas posso pegar todos os parametros chamados em uma função (pelo console.log por exemplo) e usá-los
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma(1.1, 2.2, "teste"))
console.log(soma('a', 'b', 'c'))