import express from 'express';
import dbCon from './utlis/db.js';
import dotenv from 'dotenv';
import routers from './routes/routes.js';
import cors from 'cors';

const app = express();
const port = 3000;
dotenv.config();



dbCon();
app.use(express.json())
app.use(cors())

app.use('./api', routers)
app.listen(port, (req,res) =>{
  console.log(`Server is Running on Port ${port}...`);
});