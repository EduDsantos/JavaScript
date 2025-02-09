function Carro(velocidadeMax = 200, delta = 50){
    let velocidadeAtual = 0

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax){
            velocidadeAtual += delta

        }else{
            velocidadeAtual = velocidadeMax
            console.log('a velocidade max ja foi atingida')
            velocidadeAtual = 0
        }
    }

    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.acelerar()
console.log(uno.getVelocidadeAtual())
