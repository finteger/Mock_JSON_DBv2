const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;



//Setup the view engine
app.set('view engine','ejs');
app.set('views', './views');

//Middleware to serve static files
app.use(express.static('public'));


app.listen(PORT, ()=>{
    console.log(`Connected on port: ${PORT}`);
});