function real(valor){
    moeda = 'R$'
    return console.log(`voçê recebeu ${moeda}${valor.toFixed(2).replace(".", ",")}`)

}

console.log(real(0.1 + 0.2))
