const avo = {attr1:'a', attr0:'teste'}
const pai = {__proto__:avo, attr2:'b'}
const filho = {__proto__:pai,attr3:'c'}
console.log(filho.attr1)
console.log(filho.attr0)

const carro ={
    velAtual:0,
    velMax:200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMax
        }
    },status(){
        return ` ${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo:'f40',
    velMax:320 //shadowing a velocidade maxima padrao 
}

const volvo = {
    modelo:'v40',
    status(){
        return `${this.modelo}, ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari.velAtual)
ferrari.acelerarMais(100)
console.log(ferrari.status())

volvo.acelerarMais(100)
console.log(volvo.status())