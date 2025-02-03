// const obj1 = {}
// console.log(obj1)


// console.log(typeof Object, typeof new Object)
// const obj2 = new Object
// console.log(obj2)

// function Produto(nome,preco,desc){
//     this.nome = nome
//     this.getPrecoComDesc = () =>{
//         return preco * ( 1-desc)
//     }
// }

// const p1 = new Produto('Caneta', 20, 0.15)
// console.log(p1.getPrecoComDesc())

// console.log(p1.preco)

function criarFuncionario(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return salario / 30 *(30-faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 1000, 4)
const f2 = criarFuncionario('Maria', 10000, 1)
console.log(f1.getSalario().toFixed(2))
console.log(f2.getSalario().toFixed(2))