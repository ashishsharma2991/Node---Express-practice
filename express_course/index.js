const express = require('express');
const path= require('path');
const { compileFunction } = require('vm');
const logger = require('./middleware/logger')
const app= express();
const PORT= process.env.PORT || 5000;


/*
app.get('/', (req,res)=>{
    //res.end();
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})*/

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended : false}));


//Set static folder for all html,css files in one go
app.use(express.static(path.join(__dirname, 'public')));

//Members API Routes
app.use('/api/members', require('./routes/api/members'));

//init middleware
// app.use(logger);



app.listen(PORT, ()=> console.log(`Server is Running on ${PORT}`));