import {Response, Request} from 'express';
import registerValidation from '../validations/registerValidation';
import pool from "../api-data/db";
import bcrypt from 'bcrypt';
const jwt = require('jsonwebtoken');
// const pool =require('../api-data/db');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

const registerController = async (req:Request,res:Response)=>{
     // interface IRegister{
     //      firstName: string,
     //      lastName: string,
     //      email: string,
     //      password: string,
     //      description: string
     // }
     try {
          const {error}= registerValidation(req.body);
          if(error) return res.status(400).send(error.details[0].message);
          const { firstName,lastName, email, password, description } = req.body;
          // let userObj: IRegister ={firstName,lastName, email, password, description}
          // userObj = await registerValidation(userObj);
          //checking if already exists
          const emailExists = await pool.query('SELECT * FROM users WHERE email=$1',[email]);
          if(emailExists!=null) {
         //Hash passwords
          const salt = await bcrypt.genSalt(5);
          const hashedPassword:string = await bcrypt.hash(password, salt);

          const data = await pool.query('INSERT INTO users(first_name,last_name,email,password,description) VALUES ($1,$2,$3,$4,$5)', 
          [firstName, lastName, email, hashedPassword, description]);
          //creating and assigning token
          const auth_token = jwt.sign({email: req.body.email},"token-secret");
          res.send({data: data.rows[0], token: auth_token});
     }} catch (err) {
          return res.status(400).send("something went wrong");  
     }
}
export default registerController;
// router.post('/', async(req,res)=>{
//     const {error} = registerValidation(req.body);
//     if(error) return res.status(400).send(error.details[0].message);
    
  

//     //checking if already exists
//     const emailExists = await pool.query('SELECT * FROM users WHERE email=$1',[email])
//     if(emailExists!=null) {
//          //Hash passwords
//     const salt = await bcrypt.genSalt(5);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const data = await pool.query('INSERT INTO users(First_Name,Last_Name, Email, Password, Description) VALUES ($1,$2,$3,$4,$5)', [firstName,lastName, email, hashedPassword,description]);
//     //creating and assigning token
//     const auth_token = jwt.sign({email: req.body.email},"token-secret");
//     res.send({data: data.rows[0], token: auth_token});
//     }
//     else {
//         return res.status(400).send("email already registered");
//    }
    
// })

// export default route