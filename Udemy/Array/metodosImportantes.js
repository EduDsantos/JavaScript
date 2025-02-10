const pilotos = ['massa', 'bottas', 'verstappen','jorge','Brasil']
console.log(pilotos)

pilotos.pop()
console.log(pilotos)

pilotos.push('Vettel')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

pilotos.splice(1, 0,'Massa','Morgan')
console.log(pilotos)

// pilotos.splice(2,4)
// console.log(pilotos)

const novosPilotos = pilotos.slice(1,4)
console.log(novosPilotos)