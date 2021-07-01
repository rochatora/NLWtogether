const express = require ('express')
const route = require ('./route')
const path = require('path')

const server = express() /* iniciando o express e adicionando a constante SERVER */

server.set('view engine', 'ejs') /* falando para o server que nossa view engine é o modulo EJS */
server.use(express.static("public")) /* falando para o server utilizar o conteudo publico e estatito da pasta ... */

server.set('views', path.join(__dirname, 'views')) /* o modulo path pega o caminho da pasta do projeto, junta JOIN o caminho do projeto com o dirname 'variavel global' e a pasta views, gerando um caminho ../src/views */

server.use(express.urlencoded({extended: true})) // pegar conteudo do formulario e passar para o controller (middleware)

server.use(route) /* o server utilizara o route onde o arquivo tem todas as rotas */

server.listen(3000, () => console.log("Rodando!")) /* rodar o server pela porta ... */