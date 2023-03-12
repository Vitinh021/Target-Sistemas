process.stdin.setEncoding('utf8')
console.log("Informe um nome: ")
process.stdin.on('readable', () => {
    var lista = process.stdin.read().split("")
    inverso = []
    lista.forEach(x => {
        inverso.unshift(x)
    });
    console.log(inverso.join(''))
}) 