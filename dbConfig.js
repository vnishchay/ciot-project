import mongoose from 'mongoose'

/**
 * @description : databse connection with mongodb database 
 * @return database cononection 
 * 
 */
const DatabaseConnection = async () => {
  try {
    const uri = process.env.MONGO_URI
    await mongoose.connect(uri)
  } catch (error) {
    process.exit(1)
  }
}
export { DatabaseConnection }
