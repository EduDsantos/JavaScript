// sem promise
// setTimeout(function(){
//     console.log("testando")
//     setTimeout(function(){
//         console.log("Testando 2")
//         setTimeout(function(){
//             console.log("Testando 3")
//         },3000)
//     }, 2000)
// }, 2000)


function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Executando")
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor())