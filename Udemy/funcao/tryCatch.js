function tratarErroELancar(erro) {
    throw new Error("Deu Errado")
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.nome.toUpperCase() + "!!!")
    } catch (e) {
        tratarErroELancar(e)
    }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritando(obj)