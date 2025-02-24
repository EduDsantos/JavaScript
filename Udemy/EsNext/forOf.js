for (let letra of 'Eduardo'){
    console.log(letra)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado:false}]
])

for (let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}
for(let value of assuntosMap.values()){
    console.log(value)
}

for(let [ch,vl] of assuntosMap.entries()){
    console.log(ch, vl)
}