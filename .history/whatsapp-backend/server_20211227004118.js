
import express from 'express';
import mongoose from 'mongoose';
import Messages from "./dbMessages.js";
// importing


//app config
const app =express();
const port=process.env.PORT || 9000;


//middleware
app.use(express.json())

//DB config
const connection_url='mongodb+srv://admin:T0XbedbMkVBNWrBQ@cluster0.owkc8.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connection_url);

//??

//api routes
app.get('/',(req,res)=>res.status(200).send('hello world'));


app.get('/messages/sync',(req,res)=>{
    Messages.find((err,data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

app.post('/messages/new',(req,res)=>{


    const dbMessage =req.body;
    Messages.create(dbMessage,(err,data)=>{
        if(err)
        {
            res.status(500).send(err)
        }else{
            res.status(201).send(`new message created:\n ${data}`)
        }
    });
});

//listen
app.listen(port,()=> console.log(`Listening to localhost:${port}`));