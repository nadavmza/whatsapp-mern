
import express from 'express';
import mongoose from 'mongoose';
// importing


//app config
const app =express();
const port=process.env.PORT || 9000;
//middleware

//DB config
const connection_url='mongodb+srv://admin:T0XbedbMkVBNWrBQ@cluster0.owkc8.mongodb.net/whatsappdb?retryWrites=true&w=majority'
mongoose.connect(connection_url,{
    useCreatIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//??

//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'));

    const dbMessage =

//listen
app.listen(port,()=> console.log(`Listening to localhost:${port}`));