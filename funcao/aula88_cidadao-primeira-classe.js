/**
 * Função em JS é First-Class Object (Citizens)
 * Higher-order function
 */

// Criar de forma literal
function fun1() {
    
}

// Armazenar em uma variavel
const fun2 = function () { // função anonima atribuída a uma constante

}

// Armazenar em um array (é mais comum armazenar em uma constante, mas é só para mostrar que é possivel)
const array = [function (a,b) {return a + b}, fun1, fun2]
const result = array[0] // constante para selecionar o array[0] (acessa o primeiro item do array)
console.log(result(2,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {return 'Olá'}
console.log(obj.falar())

// Passar função como parametro para outra função
function run(fun) {
    fun() // aqui irá executar a função
}
run(function () { console.log('Executando...') })

//  Uma função pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a+ b + c)
    }
}
soma(2, 3)(4)
// ou...
const cincoMais = soma(2, 3)
cincoMais(4)