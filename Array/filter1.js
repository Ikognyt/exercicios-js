const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: true}
]

//console.log(produtos)

/*console.log(produtos.filter(function(p){
    for(let i; i < this.length; i++){    
        if (p.preco >= 500 && p.fragil == true){
           return p.produtos.callback(this[i], i, this)
        }else{
            produtos.splice(i, i)
        }
    }    
}))*/

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))