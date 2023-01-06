var valores = [2,4,3,5,6,7,8]
valores.sort()
/*
valores.sort() 
console.log(valores)


for(res = 0; res < valores.length; res++){
    console.log(`a posiçao ${res} vale ${valores[res]}`)
} 
*/

for( var res in valores){
    console.log(` A posiçao ${res} tem o valor ${valores[res]}`)
}

var pos = valores.indexOf(2)

    if(pos == -1){
        console.log('valor nao encontrado')
    }else{
        console.log(`o valor esta na posiçao ${pos}`)
    }
   
