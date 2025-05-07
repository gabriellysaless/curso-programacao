// Recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}
//Criando novas variáveis com as informações dentro do objeto

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa //para dar nomes as novas variaveis
console.log(n, i)

const {sobrenome: s, cidade: c = true} = pessoa //se não houver nenhum valor, será declarado verdadeiro
console.log(s, c)
const {endereco: {logradouro: l, numero: num, cep}} = pessoa
console.log(l, num, cep)