//operador ...  rest(juntar) /spread(espalhar)
//usar rest com parâmetro de função

//usar spread com objeto
const funcionario = {nome:"Maria", salario:12345}
const clone = {ativo:true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA= ['joao','maria', 'jose']
const grupoFinal = ['JORGE', ...grupoA, 'TERSEU']
console.log(grupoFinal)