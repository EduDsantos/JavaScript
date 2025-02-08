const pai ={
    nome: ' Pedro ',
    corCabelo: 'Preto'
}

const filha = Object.create(pai)
filha.nome = 'Bia'
console.log(filha.corCabelo)
console.log(filha.nome)

const filha02 = Object.create(pai,{
    nome:{value:'ana', writable:false, enumerable:true}
})

console.log(filha02.nome)
console.log(`${filha02.nome} tem o cabelo ${filha02.corCabelo}`)

for(let key in filha02){
    filha02.hasOwnProperty(key)?console.log(key): console.log(`por herança: ${key}`)
}