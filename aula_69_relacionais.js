console.log('1° ', '1' == 1) // == igual
console.log('2° ', '1' === 1) // === idêntico (olha o tipo: string, number ...)
console.log('3° ', '3'!= 3) // != diferente (pega só os valores)
console.log('4° ', '3'!== 3) // !== Estritamente diferentes 

const d1 = new Date(0)
const d2 = new Date(0)
console.log(`${d1}, ${d2}`)
console.log('5°', d1 == d2) // São objetos diferentes na memória, não compara os valores
console.log('6°', d1 === d2) // Compara referência, não valor
console.log('7°', d1.getTime() === d2.getTime())
/*
    O método .getTime() retorna o timestamp numérico (o número de milissegundos desde 1º de janeiro de 1970, 00:00:00 UTC).
    d1.getTime() → 0
    d2.getTime() → 0
    Agora você está comparando dois valores primitivos (number), e não objetos.
    Como 0 === 0 → true
*/

console.log('8°', undefined == null) // é igual mas não é identico
console.log('9°', undefined === null)