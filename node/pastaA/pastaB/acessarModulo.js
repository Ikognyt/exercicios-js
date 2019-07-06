const moduloA = require('../../moduloA')
const moduloB = require('/Users/Pichau/Documents/GitHub/exercicios-js/node/moduloB.js')

console.log(moduloA.bemVindo)
console.log(moduloB.bomDia)

const http = require('http')
http.createServer((req, res) => {
    res.write(`${moduloA.bemVindo} ${moduloB.bomDia}!`)
    res.end()
}).listen(8080)