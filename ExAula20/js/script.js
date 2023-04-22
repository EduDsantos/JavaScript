function formu(){ //SCRIPT NO GERAL
    const form = document.querySelector('.form');
    let resultado = document.querySelector('.resultado');

    const pessoas = [] 


//FORMULARIO EM SI
    function eventos(evento){ 
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');

        pessoas.push({
            nome: nome.value,
            sobrenome:sobrenome.value,
            idade: idade.value
        });

        console.log(pessoas)

        resultado.innerHTML +=`<p>${nome.value}  ${sobrenome.value} <br> ${idade.value} Anos</p>`
    }
    form.addEventListener('submit', eventos);
}
formu()