const times = new Set()

times.add('Flamengo')
times.add('São Paulo')
times.add('Vasco')
times.add('Vasco')
console.log(times)

const nomes = ['Eduardo','Jessica','Jessica']
const novoNomes = new Set(nomes)
console.log(novoNomes.has('Eduardo'))
console.log(novoNomes)