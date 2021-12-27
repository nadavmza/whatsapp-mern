import mongoose from "mongoose";


const whatsappSchema=mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    received:Boolean,
});

//collect
export default mongoose.model("messagecontent"
,whatsappSchema);