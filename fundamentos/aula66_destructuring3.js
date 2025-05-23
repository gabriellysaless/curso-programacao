function rand({ min = 0, max = 1000}) { //{ min = 0, max = 1000} => operador destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //retorna o número inteiro
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955 }))
console.log(rand({}))
// console.log(rand()) => neste carro dará erro pq não foi passado nenhum objeto, não tem como desestruturar um valor nulo ou indefinido