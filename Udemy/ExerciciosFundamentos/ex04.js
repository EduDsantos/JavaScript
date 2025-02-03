function divisao(dividendo, divisor){
    const resultado = dividendo / divisor
    const resto = dividendo & divisor
    return console.log(`O resultado dessa divisão é ${resultado} e o restante da conta é ${resto}`)
}

console.log(divisao(5,2))
console.log(divisao(10,2))