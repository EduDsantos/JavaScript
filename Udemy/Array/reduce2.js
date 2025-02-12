const alunos = [
    {nome: 'eduardo',nota:7.3, bolsista: false},
    {nome: 'jorge',nota:8.9, bolsista: true},
    {nome: 'ana',nota:10, bolsista: false}
]


//todos os alunos sao bolsistas?
const todosBolsistas = (resultado,bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))

