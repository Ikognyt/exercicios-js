
// Implementação
Array.prototype.map2 = function(callback){
    const arr = []
    for(let i = 0; i < this.length; i ++){
        arr.push(callback(this[i], i, this))
        
    }
    return arr
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.9}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5}'
]

const paraObjeto = json => JSON.parse(json)
const apenaspreco = produto => produto.preco



const resultado = carrinho.map2(paraObjeto).map2(apenaspreco)
console.log(resultado)