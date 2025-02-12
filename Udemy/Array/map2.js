const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome":"Borracha", "preco": 3.45}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

console.log(carrinho.map(paraObjeto).map(apenasPreco))