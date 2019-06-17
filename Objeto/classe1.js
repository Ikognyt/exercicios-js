class Lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome, this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano){
        this.mes = mes, this.ano = ano, this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario01 = new Lancamento('Salario', 45000)
const contaDeLuz01 = new Lancamento('Luz', - 220)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario01, contaDeLuz01)
console.log(contas.sumario())

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', - 220)
const contaDeAgua = new Lancamento('Água', - 108)

const contas2019 = new CicloFinanceiro(4, 2019)
contas2019.addLancamentos(salario, contaDeLuz, contaDeAgua)
console.log(contas2019.sumario())