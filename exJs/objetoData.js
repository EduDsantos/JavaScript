/*
const data = new Date(1684952487244);
console.log('dia', data.getDate());
console.log('mes', data.getMonth() + 1); // o mes começa em 0
console.log('ano', data.getFullYear());
console.log('horas', data.getHours());
console.log('segundos', data.getSeconds());
console.log('dia da semana', data.getDay()); //domingo:0, sabado:6
console.log(toString())
//console.log(Date.now())
*/

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda(data.getDate());
    const ano = zeroEsquerda(data.getFullYear());
    const mes = zeroEsquerda(data.getMonth() + 1);
    const horas = zeroEsquerda(data.getHours());
    const segundos = zeroEsquerda(data.getSeconds());
    const minutos = zeroEsquerda(data.getMinutes());

    return `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);



