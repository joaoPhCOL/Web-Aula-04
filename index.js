const express = require('express');
const app = express();

app.use(express.json());

const frases = [
    {id: 10, autor: 'joao', frase: 'Frase do Joao'},
    {id: 20, autor: 'regi', frase: 'Frase do Regi'},
    {id: 30, autor: 'leticia', frase: 'Frase do leticia'},
    {id: 40, autor: 'maria', frase: 'Frase do maria'}
]

app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/frases', (req,res) => {
    res.send(frases);
})

app.post('/frases', (req,res) => {
    frases.push(req.body);
    res.status(201).send('Pronto');
})

//falta terminar
app.delete('/frases', (req, res) =>{
    let id;
    let index = frases.findIndex((frase) => frase.id == id);
    if(index == -1){
        console.status(404).send();
    }else {
        frases.splice(index, 1);
        res.status(200).send(Apagado);
    }

})


const port = 8080;
app.listen(port, (err) => {
    if(err) {
        console.error('Erros na aplicação');
    }
    console.log(`Servidor escutando na porta ${port}`);
})