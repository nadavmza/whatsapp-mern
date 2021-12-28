
import express from 'express';
import mongoose from 'mongoose';
import Messages from "./dbMessages.js";
import Pusher from "pusher";
// importing


//app config
const app =express();
const port=process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1322521",
    key: "11eff1cbbe0451f43821",
    secret: "9bcbb587eab320e5786b",
    cluster: "ap2",
    useTLS: true
  });
//middleware
app.use(express.json())

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
                name:messageDetails.user,
                message:messageDetails.message
            }
            
            );
        } else{
            console.log('Eror trigerring ')
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