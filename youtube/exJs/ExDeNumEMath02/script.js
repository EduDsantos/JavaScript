const numero = Number(window.prompt('DIGITE UM NUMERO:'))
let num = document.getElementById('texto')
let texto = document.getElementById('resp')

num.innerHTML = numero

texto.innerHTML += `<p>A RAIZ QUADRADA DO NUMERO É: ${numero ** (1/2)}</p>`
texto.innerHTML += `<p>O NUMERO ARREDONDADO PARA CIMA É: ${Math.ceil(numero)}</p>`
texto.innerHTML += `<p>O NUMERO COM DUAS CASAS DECIMAIS É: ${numero.toFixed(2)}</p>`

