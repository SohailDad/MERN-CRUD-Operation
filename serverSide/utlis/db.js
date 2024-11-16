import mongoose from "mongoose";
const DB_URL = 'mongodb://localhost:27017/crud'

const dbCon = async()=>{

    try{
       await mongoose.connect(DB_URL);
        console.log('mongodb is connected')
    } catch(error){
        console.log(error);
    }
}

export default dbCon;