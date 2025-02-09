const notas = [4.1,5.1,7.1, 10]

const notasBaixas =[]
const notasAltas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }else if(notas[i] > 7){
        notasAltas.push(notas[i])
    }
}

console.log(notasBaixas)
console.log(notasAltas)


//COM CALLBACK

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)


const notasMenorQue7 = nota => nota  >=7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)