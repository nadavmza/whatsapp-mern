import mongoose from 'mongoose'


const whatsappSchema=mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    received:
}),


export default mongoose.model('messageContent',whatsappSchema)