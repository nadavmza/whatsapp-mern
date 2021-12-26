
import express from 'express';
import mongoose from 'mongoose';
// importing


//app config
const app =express();
const port=process.env.PORT || 9000;
//middleware

//DB config
const connection_url='mongodb+srv://admin:T0XbedbMkVBNWrBQ>@cluster0.owkc8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect

//??

//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'));

//listen
app.listen(port,()=> console.log(`Listening to localhost:${port}`));