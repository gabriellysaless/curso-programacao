const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (i in notas) { // in percorre os elementos no array
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (titulo in pessoa) {
    console.log(`${titulo} = ${pessoa[titulo]}`)
}