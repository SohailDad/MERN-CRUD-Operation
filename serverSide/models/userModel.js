const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/mydatabase";
mongoose.connect(url);

const userSchema = mongoose.Schema({
    name : String,
    email : String,
    phone : String
})


module.exports = mongoose.model('user', userSchema)