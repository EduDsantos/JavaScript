function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000)
    })
}

falarDepoisDe(2, 'Testando')
    .then(frase => frase.concat('!!!'))
    .then(outraFrase => console.log(outraFrase))
    .catch((e)=> console.log(e))