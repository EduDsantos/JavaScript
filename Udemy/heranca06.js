//Função construtora
function Aula(nome,videoId){
    this.nome = nome
    this.videoId = videoId
}
const aula1 = new Aula('Bem vindo',  123)
console.log(aula1)


//simulando o New
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula2 = novo(Aula, 'Bem vindo', 456)
console.log(aula2)