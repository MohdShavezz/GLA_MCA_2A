import express from 'express'
import { forgotPassword, getAllUsers, getUserById, login, register, resetPassword } from '../controller/user.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router=express.Router()


router.route('/register').post(register) //http://localhost:3000/api/user/register POST {payload}
router.route('/login').post(login)  //http://localhost:3000/api/user/login POST {payload}
router.route('/forgot-password').post(forgotPassword)  //http://localhost:3000/api/user/forgot-password POST {payload}
router.route('/reset-password').post(resetPassword)  //http://localhost:3000/api/user/reset-password POST {payload}
router.route('/users').get(authMiddleware,getAllUsers)  //http://localhost:3000/api/user/users GET {payload}
router.route('/:id').get(getUserById)  //http://localhost:3000/api/user/:id GET {payload}


export default router