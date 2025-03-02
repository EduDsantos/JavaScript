function gerarNumerosEntre(min, max, numerosRepetidos) {
    if (min > max) [max, min] = [min, max]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + 1
        if (numerosRepetidos.includes(aleatorio)) {
            reject("Numero repetido")
        } else {

            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtsNumeros){
    try{
        const numeros = []
        for(let _ of Array(qtsNumeros).fill()){
            numeros.push(await gerarNumerosEntre(1,60,numeros))
        }
        return numeros
        
    }catch(e){
        throw "Nao deu certo"
    }
}

gerarMegaSena(10)
    .then(console.log)
    .catch(console.log)