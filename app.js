const express = require('express');
const path = require('path');
const dictionary = require('./src/dictionary.json');
const {gods} = require('./src/elements.js');
const { log } = require('console');

const app = express();
const PORT = 3000;

// deneme
app.use(express.static(path.join(__dirname, 'views')));
app.use('/src',express.static(path.join(__dirname,'src')));
app.use('/styles',express.static(path.join(__dirname,'styles')));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// change this
app.get('/search', (req, res)=>{
    res.render('temp.ejs', {
        title:"Search to get information",
        titlde_gr:"",
        description:"",
        page_title:"search"
    });
});

// change error page to nothing found page
app.get('/search/:something', (req, res)=>{
    const element = req.params.something;
    const data = dictionary[element];
    const page_title = element;
    try{
        res.render('temp.ejs',{
            title : data.Title,
            title_gr: data.TitleAlt,
            description: data.Explanation,
            image: data.Image,
            page_title
        });
    }
    catch(TypeError){
        res.sendFile(path.join(__dirname,'views',`none.html`));
    }
});

app.get('/about', (req, res)=>{
    const god_list = gods;
    const page_title = "about hellenic dictionary";
    res.render('about.ejs',{ god_list, page_title });
});

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname,'views',`none.html`));
});

app.listen(PORT, ()=>{
    console.log("Listening on 3000");
});