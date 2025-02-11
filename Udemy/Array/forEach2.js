Array.prototype.forEach2 =function (callback){
    for(let i =0; i < this.length;i++){
        callback(this[i], i , this)
    }
}

const aprovados=['Edu','bia']
aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1}) ${nome}`)
    // console.log(array)
})

