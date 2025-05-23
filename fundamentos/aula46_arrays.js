let valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)
console.log(valores.length) //Mostra quantos elementos tem

valores.push({id: 3}, false, null, 'teste') //Array aceita multiplos tipos de valores. Obs: Não é recomendado
console.log(valores)

console.log(valores.pop()) //Tira o ultimo valor do array
delete valores[0]//Deleta o valor selecionado
console.log(valores)

console.log(typeof valores)