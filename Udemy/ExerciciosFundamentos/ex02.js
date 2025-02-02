function triangulo(lado1,lado2,lado3){
    if(lado1 == lado2 && lado1 == lado3 && lado2 == lado3 ){
        console.log('Com essas medidas, o Triangulo é um EQUILÁTERO')
    }
    else if(lado1 == lado2 && lado1 != lado3){
        console.log('Com essas medidas o triangulo é um ISÓSCELES')

    }
    else if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3){
        console.log('Com essas medidas o triangulo é um ESCALENO')
    }
}

console.log(triangulo(2,2,2))
console.log(triangulo(2,2,3))
console.log(triangulo(2,1,3))
