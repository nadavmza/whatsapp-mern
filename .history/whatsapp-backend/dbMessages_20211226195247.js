import mongoose from 'mongoose'


const whatsappSchema=mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    received:V
}),


export default mongoose.model('messageContent',whatsappSchema)