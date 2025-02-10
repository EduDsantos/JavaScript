console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Eduardo', 'Reina')
console.log(aprovados)

aprovados = ['Bia', 'Eduardo', 'Reina']

console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'KillJoy'
console.log(aprovados[3])

aprovados.push('DeadLock')
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Sage'
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

aprovados = ['Eduardo', 'Ellen','Jorge']
console.log(aprovados)

aprovados.splice(1,1)
console.log(aprovados)

aprovados = ['Eduardo', 'Sage','Jorge']
console.log(aprovados)

aprovados.splice(1,0,'Morgana','Katarina')
console.log(aprovados)
