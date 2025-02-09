const produto = new Object

produto.nome = 'cadeira'
produto['marca do produto'] = ' generica'
produto.preco = 220

console.log(produto)
delete produto['marca do produto']
console.log(produto)