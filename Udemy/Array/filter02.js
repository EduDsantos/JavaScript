Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i ++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }

    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 5000, fragil: true },
    { nome: 'Celular', preco: 7000, fragil: true },
    { nome: 'Carro', preco: 10.000, fragil: false },
    { nome: 'Casa', preco: 100.000, fragil: false },
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil 

console.log(produtos.filter2(caro).filter2(fragil))



