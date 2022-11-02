function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora sao ${hora} horas.`
    

    if (hora > 0 && hora < 12){
        console.log('Bom dia!')
        img.src = "../Ex15/imagens/manha.png"
        document.body.style.background='#afa57f'
    }else if( hora >= 12 && hora <= 18){
        console.log('Boa tarde')
        img.src = '../Ex15/imagens/tarde.png'
        document.body.style.background='#8a8984'
    }else{
        console.log('Boa noite')
        img.src = '../Ex15/imagens/noite.png'
        document.body.style.background='#231f20'
    }
}