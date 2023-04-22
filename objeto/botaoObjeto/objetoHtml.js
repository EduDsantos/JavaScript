// Definindo o objeto que será vinculado ao botão
var meuObjeto = {
  nome: "Meu objeto",
  idade: 10
};

// Vinculando o objeto ao evento de clique do botão
document.getElementById("meuBotao").addEventListener("click", function() {
  // Selecionando o elemento HTML onde deseja exibir o resultado
  var resultado = document.getElementById("resultado");
  
  // Definindo o conteúdo desse elemento com o resultado desejado
  resultado.innerHTML = "Nome: " + meuObjeto.nome + "<br>Idade: " + meuObjeto.idade;
});