const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo)
if(anonimo){
    process.stdout.write('anonimo!!!\n')
    process.exit()
}else{
    process.stdout.write("Qual o seu nome?")
    process.stdin.on('data', data =>{
        const nome = data.toString().replace('\n', '')

        process.stdout.write(`Eai seu ${nome}!! \n`)
        process.exit()
    })
}