const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao) // this se refere ao objeto pessoa
    }
}

pessoa.falar()
const falar = pessoa.falar //o metodo falar agora esta 'fora' de pessoa, por isso o this aqui não se refere mais a 'pessoa'
falar()

const falarPessoa = pessoa.falar.bind(pessoa) // o método 'bind' fixa o valor de this (objeto 'pessoa') dentro da função
falarPessoa()

/**
 * BIND(vincular) fixa o this no objeto
 * É muito útil quando precisa passar métodos como callbacks, eventos, ou armazená-los em variáveis, e quer manter o contexto original.
 */