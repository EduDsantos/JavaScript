const moduloA = require('../../moduloA')
console.log(moduloA)

const http = require('http')
http.createServer((req, res)=>{
    res.write('bom dia')
    res.end()
}).listen(8080)