const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const genero = F => F.genero === 'F'
const pais = local => local.pais === 'China'
const money = verba => verba.salario <= 1300.00

const menorSalario = (func, funcatual) => {
    return func.salario < funcatual.salario ? func : funcatual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    

    console.log((funcionarios).filter(genero).filter(pais).reduce(menorSalario))
})



