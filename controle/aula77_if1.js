function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log(`Aprovado com ${nota}`)
    }
}

soBoaNoticia(6.1)
soBoaNoticia(8.1)

function seVerdadeiro(valor) {
    if(valor) { // O JS entende que o valor passado é ou verdadeiro ou falso
        console.log (`Verdadeiro! ${valor}`)
    }
}

seVerdadeiro()
seVerdadeiro(null)
seVerdadeiro(undefined)
seVerdadeiro(NaN)
seVerdadeiro('')
seVerdadeiro(0)
seVerdadeiro(-1)
seVerdadeiro(' ')
seVerdadeiro('?')
seVerdadeiro([])
seVerdadeiro([1, 2])
seVerdadeiro({})
