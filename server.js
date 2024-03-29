
import express from 'express';
import mongoose from 'mongoose';
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import path from 'path';
import cors from 'cors';
// importing


//app config
const app =express();
const port=process.env.PORT || 9000;

if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('whatsapp-frontend/buid'))
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(_dirname,'whatsapp-frontend','build','index.html'))
    })
}
const pusher = new Pusher({
    appId: "1322521",
    key: "11eff1cbbe0451f43821",
    secret: "9bcbb587eab320e5786b",
    cluster: "ap2",
    useTLS: true
  });
//middleware
app.use(express.json());
  app.use(cors())



//DB config
const connection_url='mongodb+srv://admin:T0XbedbMkVBNWrBQ@cluster0.owkc8.mongodb.net/whatsappdb?retryWrites=true&w=majority';
mongoose.connect(connection_url);


const db =mongoose.connection

db.once('open',()=>{
    console.log('Db connect');

    const msgCollection =db.collection('messagecontents')
    const changeStream= msgCollection.watch();

    changeStream.on("change",(change)=>{
        console.log("a change occured",change);


        if(change.operationType === 'insert'){
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',
            {
                name:messageDetails.name,
                message:messageDetails.message,
                timpestamp:messageDetails.timpestamp,
                received: messageDetails.received
            }
            
            );
        } else{
            console.log('Eror trigerring pusher')
        }
    

    
    });
});




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


