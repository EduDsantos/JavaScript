function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=>{
        try{
            cole.log('teste')
            if(Math.random() < chanceErro){
            reject('Ocorreu um Erro')
            }else{
                resolve(valor)
            }

        }catch(e){
            reject(e)
        }
    })
}

funcionarOuNao('Testando', 0.1)
    .then(v => console.log(v))
    .then(v => console.log(v))
    .catch(err => console.log(`Erro: ${err}`))