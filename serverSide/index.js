import express from 'express';
import dbCon from './utlis/db.js';
import dotenv from 'dotenv';
import routers from './routes/routes.js';

const app = express();
const port = 3000;
dotenv.config();



dbCon();

app.use('./api', routers)
app.listen(port, (req,res) =>{
  console.log(`Server is Running on Port ${port}...`);
});