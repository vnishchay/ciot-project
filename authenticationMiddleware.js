import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from "./model.js";



/**
 *  @description : authorization middleware, intercepts the request and verify the jwt token if verifietd, 
 *                 returns the next, ohterwise throws an error. 
 */
const protect = expressAsyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {

      token = req.headers.authorization.split(' ')[1]

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      res.status(401)
      throw new Error('Not authorized')
    }
  }

  if (!token) {
    res.status(401)
    throw new Error('Not authorized, no token')
  }
})

export default protect
