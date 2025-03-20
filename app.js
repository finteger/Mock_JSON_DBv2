const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;



//Setup the view engine
app.set('view engine','ejs');
app.set('views', './views');

//Middleware
app.use((req, res, next)=>{
    const time = new Date();

    console.log(time, req.url, req.method);

    next();
});

app.get('/home', (req, res) =>{
   console.log('This is always triggered secondly.')
});


app.listen(PORT, ()=>{
    console.log(`Connected on port: ${PORT}`);
});