import mongoose from 'mongoose';
const userSchema =new mongoose.Schema({
    name : String,
    fathername:String,
    email:String,
    phone:Number

},{timestamps:true});


export default UserModels = mongoose.model('user',userSchema);
