const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')


const app = express()

const server = http.Server(app)
const io = socketio(server)

const connectedUsers = {}

mongoose.connect('mongodb+srv://AirCnC:HG7ThW1huKrXM0Dh@aircnc-ktl3m.mongodb.net/AirCnCDb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})



io.on('connection', socket => {
    const { user_id } = socket.handshake.query;
    connectedUsers[user_id] = socket.id
    // socket.on('listerner', data => console.log(data))
})


app.use((req, res, next)=> {
    req.io = io
    req.connectedUsers = connectedUsers
    return next();
})





//req.query => acessar query params (para filtros)(get)
//req.params => acessar route params (para edicao e delete)(PUT,DELETE)
//req.body => acessar corpo da requisicao (para criacao, edicao)(POST)


//na URL => /minha/url/aqui:id  (id é um route param e vem da url que esta tentando me acessar)
app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)

server.listen(3333)