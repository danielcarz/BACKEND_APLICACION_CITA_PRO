const express = require('express');

//create express app
const app = express();


//listen for requests
app.listen(4000, ()=>{
    console.log("server started at port 3000");
})