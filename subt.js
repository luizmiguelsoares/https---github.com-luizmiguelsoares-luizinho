import express from 'express'

const server = express ()

server.get('/calculadora/subtracao/:n1/:n2', (req, resp) => { 
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    
    let soma = n1 - n2
    
    resp.send('A soma é ' + soma)
}) 

server.listen(5030, () => console.log('API subiu na porta 5030'))