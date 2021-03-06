const { Router } = require('express')
const express = require ('express')
const questionController = require ('./controllers/questionController')
const roomController = require ('./controllers/roomController')

const route = express.Router() /* constante route guarda todas as funcionalidades de rotas que o express tem */

route.get('/', (req, res) => res.render("index", {page: 'enter-room'})) /* criando uma rota '/' onde ao colocar este item no navegador é o mesmo que localhost:3000/ */
route.get('/create-pass', (req, res) => res.render("index",{page: 'create-pass'}))

route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open)
route.post('/enterroom', roomController.enter)

/*  Formato que o formulario de dentro da modal tem que passar a info */
route.post('/question/:room/:question/:action', questionController.index) //passando o questionController para nossa rota
route.post('/question/create/:room', questionController.create)


module.exports = route