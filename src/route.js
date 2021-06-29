const { Router } = require('express')
const express = require ('express')

const route = express.Router() /* constante route guarda todas as funcionalidades de rotas que o express tem */

route.get('/', (req, res) => res.render("index")) /* criando uma rota '/' onde ao colocar este item no navegador é o mesmo que localhost:3000/ */
route.get('/room', (req, res) => res.render("room"))
route.get('/create-pass', (req, res) => res.render("create-pass"))

/*  Formato que o formulario de dentro da modal tem que passar a info */
/* route.post('/room/:room/:question/:action') */


module.exports = route