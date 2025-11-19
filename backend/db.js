import mongoose from 'mongoose'

//Connecting to db
async function connectDB() {
    try {
            await mongoose.connect(process.env.MONGO_URL)
            console.log('MongoDB Connected')
    } catch(e) {
        console.log('MongoDB Error:', e)
    }

}

export default connectDB