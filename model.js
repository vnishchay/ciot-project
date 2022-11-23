import mongoose from 'mongoose'

/**
 *  @description : schema for assignment{files}
 */

const userschema = mongoose.Schema(
  {
    username : {
      type : String, 
      required : [true]
   },
    password : {
       type : String, 
     },
    carname : {
        type : String, 
        required : [true]
     },
     numberplate : {
         type : String, 
         required : [true , 'Please add number plate'],
       },
  },
  { timestamps: true }
)

const User = mongoose.model('User', userschema )
export default User
