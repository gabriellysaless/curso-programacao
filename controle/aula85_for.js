let contador = 1
while(contador <= 10) {
    console.log(`Contador: ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) { // Inicializa a variável i com 1, executa o bloco enquanto i for menor ou igual a 10, e incrementa i em 1 a cada iteração.
    console.log(`${i}...`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`)
}