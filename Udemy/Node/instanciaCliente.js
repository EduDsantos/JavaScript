const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
contadorA.inc()

console.log(contadorB)

contadorC.inc()
contadorC.inc()
console.log(contadorD.valor, contadorC.valor)