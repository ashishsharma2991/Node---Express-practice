const moment= require('moment');

//custom middleware function logger
const logger= (req,res,next)=>{
    console.log(`${req.originalUrl}: ${moment().format()}`);
    next();
}

module.exports=logger;