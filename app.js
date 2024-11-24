const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// deneme
app.use(express.static(path.join(__dirname, 'views')));
app.use('/src',express.static(path.join(__dirname,'src')));
app.use('/styles',express.static(path.join(__dirname,'styles')));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res)=>{
    res.sendFile(path.join(__dirname,'views',`about.html`));
});

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'views',`none.html`));
});

app.listen(PORT, ()=>{
    console.log("Listening on 3000");
});