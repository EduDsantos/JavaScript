console.log(this ===global) //false
console.log(this ===module) //false

console.log(this === module.exports) //true
console.log(this === exports) //true

function logThis(){
    console.log('Dentro de uma function')
    console.log(this === exports)
    console.log(this ===global)
}

logThis()