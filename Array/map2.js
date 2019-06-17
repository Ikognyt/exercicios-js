const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.9}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5}'
]

//console.log(JSON.stringify(carrinho))

// Retornar um array apenas com os preços

/*unjs = JSON.parse(carrinho)
console.log(carrinho)

carrinho.forEach(function(){
    
    carrinho.splice(0,0)
})*/


const paraObjeto = json => JSON.parse(json)
const apenaspreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenaspreco)
console.log(resultado)