let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 3 //0 = false; Números Inteiros = true
console.log(!!isAtivo) //!! = true; ! = false (diferente)

console.log('Os Verdadeiros...')
console.log(!!Infinity)
console.log(!!' ')
console.log(!![])
console.log(!!{})

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log('Para finalizar...')
let nome = 'Gaby' //true
console.log(nome || 'Desconhecido') //Caso o nome dê falso, irá aparecer "desconhecido"