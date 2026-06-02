function geradorRelatorio(cliente, valorFrete){
    return `
    Cliente: ${cliente}
    Valor do frete: R$ ${valorFrete}
    `
}

module.exports = geradorRelatorio;