const x = 'Global'

function fora(){
    const x = 'Local'
    function Dentro(){
        return x
    }
    return Dentro()
}

const minhaFuncao = fora()
console.log(minhaFuncao)