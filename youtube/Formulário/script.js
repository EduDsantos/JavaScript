function formu(){
    const form = document.querySelector('.formulario');
    const resultado = document.querySelector('.resultado');

    const dados=[]

    function evento(eventos){
        eventos.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome =form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');

        dados.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value
        });

        console.log(dados)
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} <br> ${idade.value}</p>`

       
    }

    form.addEventListener('submit',evento);

 
}
formu()