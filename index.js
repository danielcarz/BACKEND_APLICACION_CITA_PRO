const express = require('express');
require('dotenv').config();


//create express app
const app = express();


//routes
app.use( express.static('public') );


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