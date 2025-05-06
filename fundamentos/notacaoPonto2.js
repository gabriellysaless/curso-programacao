console.log(Math.ceil(6.3))

const obj1 = {}
obj1.nome = 'Bola'

console.log(obj1.nome)

class Obj {
    constructor(nome) {
        this.nome = nome
        /*
            class Obj: define a classe Obj, que será o molde dos objetos.
            constructor(nome): é o método que será executado quando usamos new Obj(...).
            Ele recebe o parâmetro nome e o armazena na propriedade this.nome
        */
    }
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')
console.log (obj2.nome) //.nome: Usamos a NOTAÇÃO DE PONTO (.) para acessar a propriedade nome do objeto obj2.
console.log (obj3.nome)