import express from 'express'
import protect from './authenticationMiddleware.js'
import {
  getMe,
  updateUser
} from './crud.js'



const userRouter = express.Router()

userRouter.get('/user/currentUser', getMe)
userRouter.patch('/user/addCar', updateUser )
export default userRouter
