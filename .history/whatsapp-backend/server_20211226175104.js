
import express from 'express';
import mongoose
// importing


//app config
const app =express();
const port=process.env.PORT || 9000;
//middleware

//DB config


//??

//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'));

//listen
app.listen(port,()=> console.log(`Listening to localhost:${port}`));