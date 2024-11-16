import mongoose from 'mongoose';
const userSchema =new mongoose.Schema({
    name : String,
    fathername:String,
    email:String,
    phone:Number

},{timestamps:true});


const UserModels = mongoose.model('user',userSchema);
export default UserModels ;
