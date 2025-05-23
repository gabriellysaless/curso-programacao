function rand([min = 0, max = 1000]) { // Função rand recebe um array
    if (min > max) [min, max] = [max, min] //se min for maior inverte
    const valor = Math.random() * (max - min) + min //Somando min, você ajusta a posição para começar a partir de min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([800]))
console.log(rand([,15]))
console.log(rand([]))