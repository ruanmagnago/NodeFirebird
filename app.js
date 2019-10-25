const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var database = require('./database');
const port = 3100;

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(function(req, res, next ) {
	res.header("Access-Control-Allow-Origin", "*" );	
	res.header("Access-Control-Allow-Methods","GET,PUT,POST,DELETE");
	res.header("Access-Control-Allow-Headers","Content-Type");	
	next();
  });

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json(
    { message: 'Teste de api Funcionando!' })
);

app.get('/database', function (req, res) {	
	res.send('exibindo banco de dados');
	app.use('/database', database); 
})

app.use('/', router);
app.listen(port);
console.log('API Funcionando!!');
