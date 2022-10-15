var ano = new Date()
var anoA = ano.getFullYear()
var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var mes = agora.getDate()
var dia = agora.getMonth()

console.log(`HORA:${hora}:${min}`)
console.log(`DATA: ${mes}/${dia}/${anoA}`)

if (hora <= 12){
    console.log('Bom dia!')
}else if(hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}