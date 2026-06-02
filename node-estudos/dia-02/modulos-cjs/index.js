const calcularFrete = require('./calcularFrete')
const geradorRelatorio = require('./gerarRelatorio')

const cliente = 'Usina Santa Rita'
const distanciaKm = 120
const valorPorKm = 3.5

const valorFrete = calcularFrete(
    distanciaKm, valorPorKM
)

const relatorio = geradorRelatorio(
    cliente, valorFrete
)

console.log(relatorio);;
