const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 1234
}

//factory simples
function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

function criarProduto(produm, prodois){
    const desconto = 15
    return{
        nome: produm,
        preco: prodois,
        total: prodois - ((prodois * desconto) / 100)

    }
}

console.log(criarPessoa())
console.log(criarProduto('Geladeira', 1500))
console.log(criarProduto('Moto', 25000))