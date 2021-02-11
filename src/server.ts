// const express = require ('express');
import express from 'express';
import bodyParser from 'body-parser';
import register from '../server/Controllers/registerController';
import login from '../server/Controllers/loginController';
// const  register = "./server/Controllers/registerController";
// const login = "./server/Controllers/loginController"


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!..');
// });

app.use('/api/register', register);
app.use('/api/login', login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));

