let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(["Eduardo", "Ana", "Joao"])
})

p.then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra[0])
    .then(letra => console.log(letra))
