/* Método antigo
function pessoa() {
    this.idade = 0

    const self = this // armazena o this original na variável
    setInterval(function() { // Chama uma função repetidamente a cada X milissegundos (neste caso, 1000 ms = 1 segundo).
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new pessoa
*/

// OU

function pessoa2() {
    this.idade = 0
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //fixa o this da função para o mesmo do objeto criado 'pessoa2
}

new pessoa2