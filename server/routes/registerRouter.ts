import {Router} from 'express'
import registerController from '../Controllers/registerController'

const registerRoutes = Router()

registerRoutes.post('/register',registerController);

module.exports = registerRoutes