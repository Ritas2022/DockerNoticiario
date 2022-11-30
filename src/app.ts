const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

import { Boletim } from "./models/boletim"
import { Service } from "./models/services";

app.set('view engine', 'ejs');
app.set('views', './src/views'); 

app.use(bodyParser.urlencoded({extended: false}));

var service = new Service();
service.start();

app.use(express.static('src/public'));

app.get('/', criarNoticia);
app.get('/noticias', listarNoticias);
app.post('/noticia', noticia);

app.listen(port, listenHandler);

function criarNoticia(req,res){
    res.render('criarNoticia.ejs'); 
}

function noticia(req,res){
    let novaNoticia = new Boletim();  
    novaNoticia.titulo = req.body.titulo;
    novaNoticia.data = req.body.data;
    novaNoticia.descricao = req.body.descricao;
    service.insert(novaNoticia);
    res.render('noticia.ejs', {noticia: novaNoticia}); 
} 

async function listarNoticias(req, res){
    let noticia = await service.listagem();
    res.render('listarNoticias.ejs',{lista_boletim: noticia});    
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}