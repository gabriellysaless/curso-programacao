//Quando desestruturamos um objeto usamos as chaves '{}' e quando estamos desestruturando array usamos o colchete '[]'

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // O segundo e o quarto elemento não foram especificados, por isso os valores 7 e 8 não apareceram
console.log(n1, n3, n5, n6)