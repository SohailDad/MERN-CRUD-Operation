import express from 'express';
import { Createuser } from '../controller/UserController.js';

const routers = express.Router();



routers.post('/create',Createuser);

export default routers;