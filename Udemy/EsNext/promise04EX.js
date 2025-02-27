const fs = require('fs')
const caminho = __dirname + '/dados.txt'

function lerArquivos(lerArquivos){
    return new Promise(resolve =>{
        fs.readFile(lerArquivos, 'UTF-8',(err, conteudo)=>{
            resolve(conteudo)
        })
    })
}

lerArquivos(caminho).then(console.log)