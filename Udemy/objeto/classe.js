class Lancamento {
    constructor(nome='generico',valor=0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor
        })

        return valorConsolidado
    }

}

const salario = new Lancamento('salario', 4300)
const contaLuz = new Lancamento('luz', -300)

const contas = new cicloFinanceiro(2,2025)
contas.addLancamentos(salario,contaLuz)
console.log(contas.sumario())