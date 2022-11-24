import expressAsyncHandler from "express-async-handler";
import User from "./model.js";


const updateUser = expressAsyncHandler(async (req, res) => {
  const {numberplate, username } = req.body; 
  const  user = await User.find({ 'username' : username });
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }
  console.log(user[0])
  const id = user[0]._id ; 
  console.log(id)
  const result = await User.findByIdAndUpdate(
    id ,
    {
        "numberplate":  numberplate
    },
    {
      new: true,
    }
  );
  res.status(201).json(result);
});



// /**
//  *  @param : username, passsword email role
//  *  @returns : user object with jwt token if successful, otherwise returns error message
//  */
// const registerUser = expressAsyncHandler(async (req, res) => {
//   const { username, password, carname , numberplate  } = req.body
//   if (!username || !password  || !carname || !numberplate ) {
//     res.status(400)
//     throw new Error('Please add all fields')
//   }
//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(password, salt)

//   const user = await User.create({
//     username,
//     password: hashedPassword, 
//     carname : carname, 
//     numberplate: numberplate
//   })
 
//   if (user) {
//     res.status(201).json({
//       _id: user.id,
//       name: user.username,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid user data')
//   }
// })


// /**
//  * @param {string} : email , password
//  * @param {string} : user object with jwt token
//  */
// const loginUser = expressAsyncHandler(async (req, res) => {
//   const { username , password } = req.body

//   // Check for user email
//   const user = await User.findOne({ username })

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({
//       _id: user.id,
//       name: user.username,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid credentials')
//   }
// })

/**
 *  @param {string} : takes req.user and 
 * @returns the current user
 */
const getMe = expressAsyncHandler(async (req, res) => {
    const {username} = req.body 
    const  user = await User.find({ 'username' : username });
    if(!user) {
         res.status(400) 
         throw new Error('User not found')
    }
    res.json(user[0])
})


/**
 * 
 * @param {*} id  
 * @returns : jwt token with 30 days expiry. 
 */




export { getMe, updateUser }


