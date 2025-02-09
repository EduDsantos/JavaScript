//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log(`É extensivel?: ${Object.isExtensible(produto)}`)
delete produto.tag
console.log(produto)
produto.nome = 'Josivaldo'
console.log(produto)

//Object.seal
const pessoa = {nome:'Eduardo', idade:22}

Object.seal(pessoa)
console.log(`Esta selado?:  ${Object.isSealed(pessoa)}` )
delete pessoa.nome
console.log(pessoa)
pessoa.sexo = 'masculino'