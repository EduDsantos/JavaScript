const imprimirResuoltado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log('aprovado')
            break
        case 8: case 7:
            console.log('aprovado')
            break
        case 6: case 5: case 4:
            console.log('recuperação')
            break
        case 3: case 2: case 1:
            console.log('reprovado')
            break
        default:
            console.log('Nota invalida!')
            break
    }
}

imprimirResuoltado(10)
imprimirResuoltado(0)
imprimirResuoltado(4)
imprimirResuoltado(7.5)
imprimirResuoltado(6.5)

