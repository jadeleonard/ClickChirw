import mongoose from 'mongoose'



const mongoClient = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        
        console.log('connected')
    } catch (error) {
        console.log('error',error)
    }
}


export default mongoClient