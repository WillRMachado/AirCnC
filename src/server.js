const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb+srv://AirCnC:HG7ThW1huKrXM0Dh@aircnc-ktl3m.mongodb.net/AirCnCDb?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})


//req.query => acessar query params (para filtros)(get)
//req.params => acessar route params (para edicao e delete)(PUT,DELETE)
//req.body => acessar corpo da requisicao (para criacao, edicao)(POST)


//na URL => /minha/url/aqui:id  (id é um route param e vem da url que esta tentando me acessar)
app.use(express.json())
app.use(routes)

app.listen(3333)