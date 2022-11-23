import express from 'express'
import protect from './authenticationMiddleware.js'
import {
  registerUser,
  loginUser,
  getMe,
  updateUser
} from './crud.js'



const userRouter = express.Router()

userRouter.post('/user/', registerUser)
userRouter.post('/user/login', loginUser)
userRouter.get('/user/currentUser', protect, getMe)
userRouter.patch('/user/addCar', updateUser )
export default userRouter
