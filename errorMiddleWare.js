
/**
 * 
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
 const errorHandler = (err, req, res, next) => {
    const statusCode = req.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
  }
  
  export default errorHandler
  