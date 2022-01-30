const express= require('express');
//init express
const app= express();

//get data from front end via webservice call (/router handler)
app.get('/', (req,res)=>{
    res.end('<h1>Response From Ashish express js</h1>');
})

app.get('/about', (req,res)=>{
    res.end('<h1>Welcome to About Page</h1>');
})

//listen on port
app.listen(5000);