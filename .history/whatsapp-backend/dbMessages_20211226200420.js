import mongoose from "mongoose";


const whatsappSchema=mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    received:Boolean,
});


ex default mongoose.model("messageContent"
,whatsappSchema);