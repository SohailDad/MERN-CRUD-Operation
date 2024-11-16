const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;
// const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection URI
const uri = "mongodb://localhost:27017/mydatabase";

// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB...."))
  .catch((err) => console.log("MongoDB connection error:", err));

// Define a schema and model for your items
const Item = mongoose.model("Item", new mongoose.Schema({ name: String }));



// CRUD Routes

// app.get('/', async(req, res) => {
//   try{
//      const Items = await Item.find();
//     res.json(Items);
//   }catch(error){
//    res.status(500).json({message: error.meassage});
   
//   }
// });


// app.post('/items',async (req,res) =>{
//   const item = new Item({ name: req.body.name });
//   try {
//     const newItem = await item.save();
//     res.status(201).json(newItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// })


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
