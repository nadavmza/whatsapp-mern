import mongoose from 'mongoose'


const whatsappSchema=mongoose.Schema({
    message:String,
    name:String,
    timestamp:String,
    re
}),


export default mongoose.model('messageContent',whatsappSchema)