const express = require('express');
require('dotenv').config();


const { createUser } = require('./controllers/auth');
const { dbConnection } = require('./DataBase/config');

 
//create express app  
const app = express();

//DB conection
dbConnection();

// parse incoming JSON and urlencoded payloads
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


//routes
app.use( express.static('public') );

app.use( '/api/auth', require('./routes/auth') );


/* 
app.get('/', (req, res)=>{

    res.send('Hello World');

    req.json({ok: true});


});
 
*/
 

//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log(`server started at port  ${process.env.PORT}`);
})