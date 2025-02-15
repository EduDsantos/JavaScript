const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesa = f => f.pais === 'China'
const feminino = f => f.genero === 'F'
const menorSalario = (func, funcAtual)=>{
    return func.salario < funcAtual.salario ? func : funcAtual
}

//Eu fiz certo porem errei uma parte crucial: Estava dando erro por que eu nao estava chamando as funções dentro do escopo da requisição e esqueci de atribuir a constante que recebe os dados em outra constante

axios.get(url).then(response =>{
    const funcionarios = response.data
    // console.log(funcionarios)

    const func = funcionarios
    .filter(chinesa)
    .filter(feminino)
    .reduce(menorSalario)
    console.log(func)
})

