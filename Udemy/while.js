function imprimirResultadoEntre(min, max){
    const valor = Math.random() * (min - max) + min
    return Math.floor(valor)
}

let opcao

while(opcao != -1){
    opcao = imprimirResultadoEntre(-1, 100)
    console.log('o valor é: ' + opcao)
}