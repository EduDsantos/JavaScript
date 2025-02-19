const fs = require('fs')
const produto = {
    nome: 'oloco',
    preco: '000'
}

fs.writeFile(__dirname + '/teste.json', JSON.stringify(produto), err =>{
    console.log(err || "ufaa")
})