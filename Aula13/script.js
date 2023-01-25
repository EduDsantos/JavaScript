let num = document.getElementById('txtn')
let lista = document.getElementById('listat')
let resp = document.getElementById('res')

let valores = []


//Primeira parte: Adicionando numeros à lista.
function clicar(){ 
    if (num.value == 0 || num.value < 0 || num.value > 100){
        window.alert('ERRO! Valores invalidos.')
    }else{
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resp.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

//Segunda parte: Printando os resultados na tela.

function final(){
    if(valores.length == 0){
        window.alert('Adicione um valor')
    }else{
        let tot = valores.length

        let maior = valores[0]
        let menor = valores[0]
        let soma  = valores[0]
        let media = valores[0]

        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot        
        resp.innerHTML = ''
        resp.innerHTML +=`Ao todo temos ${tot} numeros adicionados!`

        resp.innerHTML += `<p>o maior numero é o ${maior}</p>`
        resp.innerHTML += `<p> o menor numero é o ${menor}</p>`
        resp.innerHTML += `<p> A soma dos valores é de ${soma}</p>`
        resp.innerHTML += `<p> A media dos valores é de ${media}</p>`

    }
   
}
