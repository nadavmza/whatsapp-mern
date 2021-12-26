import mongoose from 'mongoose'


const whatsappSchema=mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    rec
}),


export default mongoose.model('messageContent',whatsappSchema)