const alunos = [
    { nome: 'Joao', nota: 4.3 },
    { nome: 'Maria', nota: 2.1 }
]

//imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total+atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)