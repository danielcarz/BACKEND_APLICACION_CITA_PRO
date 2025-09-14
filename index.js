const express = require('express');
require('dotenv').config();


const { createUser } = require('./controllers/auth');


//create express app
const app = express();


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