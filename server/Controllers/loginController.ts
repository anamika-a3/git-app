// import express from 'express';
import pool from '../api-data/db';
import {Response, Request} from 'express';
// import bcrypt from  'bcrypt';
import loginValidation from '../validations/loginValidation';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// import jwt from 'jsonwebtoken';

// const router = express.Router()

// router.use(express.json())

const loginController = async (req:Request,res:Response)=>{
    interface ILogin {
        email: string,
        password: string,
    }
    try {
        const {email,password}=req.body;
        let userObj: ILogin = {email,password}
        userObj = await loginValidation(userObj);
        const user_email = await pool.query('SELECT email FROM users WHERE email=$1',[email])
        const user_password = await pool.query('SELECT password FROM users WHERE email=$1',[email])
        
        if(user_email.rowCount==0 || user_password.rowCount==0)
        res.status(400).send('Wrong Email Password');

        const matching = await bcrypt.compare(password, user_password.rows[0].password);
        const auth_token = jwt.sign({email: req.body.email},"token-secret");  //demo comment
        if(!matching) return res.status(400).send("Something went wrong");
        else return res.status(200).json({"token":auth_token,"msg": "login successfull" });
    } catch (error) {
        return res.status(400).send("something went wrong");
    }
}

export default loginController
// router.post('/', async(req,res)=>{

//     const {email,password}=req.body;
//     const {error} = await loginValidation(req.body);

//     if(error) return res.send(error.details[0].message)
//     const auth_token = jwt.sign({email: req.body.email},"token-secret");  //demo comment

//         const user_email = await pool.query('SELECT email FROM login WHERE email=$1',[email])
//         const user_password = await pool.query('SELECT password FROM login WHERE email=$1',[email])
        
//         if(user_email.rowCount==0 || user_password.rowCount==0)
//         res.status(400).send('Wrong Email Password');

//         const matching = await bcrypt.compare(password, user_password.rows[0].password);
        
//         if(!matching) return res.status(400).send("Something went wrong");
//         else return res.status(200).json({"token":auth_token,"msg": "login successfull" });       

// })

// export default router