const express = require('express');

const app = express();

app.get(['/ale','/apple'],(req,res,next) => {
    res.status(200).send("Apple or ale");
});

app.get('/who+a+',(req,res,next) => {
    res.status(200).send("I know, right?");
});

app.get('/:first/:last',(req,res,next) => {
    res.status(200).send(`Hello, ${req.params.first} ${req.params.last}`);
});

app.get('/:word',(req,res,next) => {
    res.status(200).send(req.params.word.split('').reverse().join(''));
})

app.listen(3000,()=>{
    console.log('listening on port 3000');
});

app.get('*',(req,res,next)=>{
    res.send("No routes found");
});
