function formu(){ //SCRIPT NO GERAL
    const form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    const pessoas = [] //ARRAY AONDE OS OBJETOS IRAO SER GUARDADOS


//FORMULARIO EM SI
    function eventos(evento){ 
        evento.preventDefault();//SERVE PARA BOTAR UMA AÇAO AO EVENTO, QUE SERIA PARA NAO RELOGAR A TELA
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');

        pessoas.push({                //ADICIONANDO O OBJETO NA ARRAY LINKANDO AS VARIAVEIS DA FUNÇAO
            nome: nome.value,
            sobrenome:sobrenome.value,
            idade: idade.value
        });

        console.log(pessoas) // SERVE PARA MOSTRAR OS OBJETOS

        resultado.innerHTML +=`<p>${nome.value}  ${sobrenome.value} <br> ${idade.value} Anos</p>`
    }
    form.addEventListener('submit', eventos);//SERVE PARA BOTAR O EVENTO NA TELA, SEM ELE O PREVENTDEFAULT N FUNCIONA
}
formu()