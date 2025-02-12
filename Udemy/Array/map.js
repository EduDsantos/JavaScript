const nums = [1,2,3,4]

let resultados = nums.map(function(e){
    return e * 2
})
console.log(resultados)

const soma10 = e => e * 2
const soma5 = e => e + 10
const dinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

resultados = nums.map(soma10).map(soma5).map(dinheiro)
console.log(resultados)