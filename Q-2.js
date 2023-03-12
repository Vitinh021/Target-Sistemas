process.stdin.setEncoding('utf8')
console.log("Informe um número: ")
process.stdin.on('readable', () => {
    var entrada = parseInt(process.stdin.read())
    var anterior = 0
    var atual = 1
    var proximo = 0
    while (true) {
        proximo = anterior + atual
        if (proximo == entrada) {
            console.log(`${proximo} pertence a tabela de Fibonacci`)
            break;
        } else {
            anterior = atual
            atual = proximo
        }
    }
})
