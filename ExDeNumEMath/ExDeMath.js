const resu = Number(prompt('DIGITE UM NUMERO'))
const numb = document.getElementById('numero')
const texto = document.getElementById('text')

numb.innerHTML = resu

texto.innerHTML += `<p>A RAIZ QUADRADA DO NUMERO É: <strong>${resu ** (1/2)}</strong></p>`
texto.innerHTML += `<p>NaN?: <strong> ${isNaN(resu)} </strong></p>`
texto.innerHTML += `<p>ARREDONDADO PARA CIMA:  <strong> ${Math.ceil(resu)} </strong></p>`
texto.innerHTML += `<p>ARREDONDADO PARA BAIXO: <strong> ${Math.floor(resu)} </strong></p>`
texto.innerHTML += `<p><strong>${resu} </strong> ELE É INTEIRO?: <strong> ${Number.isInteger(resu)} </strong></p>`
texto.innerHTML += `<p>COM DUAS CASAS DECIMAIS:<strong> ${resu.toFixed(2)} </strong></p>`

