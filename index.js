const express = require('express');

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
app.listen(4000, ()=>{
    console.log("server started at port 3000");
})