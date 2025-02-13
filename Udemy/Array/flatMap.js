const escola = [{
    nome: 'TURMA1',
    alunos: [{
        nome: 'Eduardo',
        nota: 7.1
    }, {
        nome: 'Rebeca',
        nota: 2.1
    }]
}, {
    nome: 'TURMA2',
    alunos: [{
        nome: 'ana',
        nota: 9.9
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)


//flatMap
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)