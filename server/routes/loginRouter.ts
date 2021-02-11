import {Router} from 'express'
import loginController from '../Controllers/loginController'

 const loginRoutes = Router();

loginRoutes.post('/login',loginController);

module.exports = loginRoutes;