String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Eduardo'.reverse())

Array.prototype.first = function(){
    return this[2]
}

console.log(['Eduardo','opa','jorge'].first())