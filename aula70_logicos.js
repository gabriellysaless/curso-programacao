function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTelevisao50 = trabalho1 && trabalho2
    // const comprarTelevisao32 = !!(trabalho1 ^ trabalho2) // (!! = transforma para boolean; ^ = sinal de 'ou exclusivo')
    const comprarTelevisao32 = trabalho1 != trabalho2 // 'ou excusivo'
    const saudavelMasPobre = !comprarSorvete

    return {comprarSorvete, comprarTelevisao50, comprarTelevisao32, saudavelMasPobre}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))