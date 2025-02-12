const alunos = [
    {nome: 'eduardo',nota:7.3, bolsista: false},
    {nome: 'jorge',nota:8.9, bolsista: true},
    {nome: 'ana',nota:10, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})
console.log(resultado)