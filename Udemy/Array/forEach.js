const aprovados = ['Eduardo','Agatha','Bia']

aprovados.forEach(function(nome,indice){
    console.log(`${indice}) ${nome}`)
})

aprovados.forEach((indice,nome)=>console.log(nome,')',indice))