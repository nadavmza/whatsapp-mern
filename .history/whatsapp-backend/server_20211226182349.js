
import { Message } from '@mui/icons-material';
import express from 'express';
import mongoose from 'mongoose';
import
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

app.post('/api/v1/messages/new',(req,res)=>{


    const dbMessage =req.body
    Messages.create(dbMessage,(err,data)=>{
        if(err)
        {
            res.status(500).send(err)
        }else{
            res.status(201).send(`new message created:\n ${data}`)
        }
    })
})

//listen
app.listen(port,()=> console.log(`Listening to localhost:${port}`));