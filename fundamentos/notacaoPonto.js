console.log(Math.ceil(6.3))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj (nome) { //Funções que são projetadas para criar objetos são frequentemente chamadas de "funções construtoras". A convenção geralmente é usar a primeira letra maiúscula para o nome dessas funções (como Obj)
    this.nome = nome
    /*
        this: Dentro de uma função construtora, a palavra-chave this se refere ao novo objeto que está sendo criado.
        .nome: Estamos criando* uma propriedade chamada nome para esse novo objeto.
        nome: O valor que está sendo atribuído à propriedade this.nome é o valor do parâmetro nome que foi passado para a função quando o objeto foi criado.
    */
}

//Em resumo, a função Obj serve como um "molde" para criar objetos. Cada objeto criado usando Obj terá uma propriedade chamada nome, cujo valor será definido quando o objeto for instanciado.

const obj2 = new Obj ('Cadeira')

/*
    new: A palavra-chave new é fundamental. Ela realiza as seguintes ações:
        Cria um novo objeto vazio.
        Faz com que a palavra-chave this dentro da função Obj se refira a esse novo objeto criado.
        Executa o código dentro da função Obj, neste caso, atribuindo o valor 'Cadeira' à propriedade nome do novo objeto.
        Retorna implicitamente o novo objeto criado e o atribui à variável obj2.
*/
const obj3 = new Obj ('Mesa')
console.log (obj2.nome) //.nome: Usamos a NOTAÇÃO DE PONTO (.) para acessar a propriedade nome do objeto obj2.
console.log (obj3.nome)