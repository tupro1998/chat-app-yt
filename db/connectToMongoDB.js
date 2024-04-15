import monguse from 'mongose';

const connectToMongoDB = async()=>{
    try {
       await monguse.connect(process.env.MONGO_DB_URL,) 
       console.log("Connected to ");
    } catch (error) {
        console.log("error connect to MongoDB",error.message)
    }
}

export default connectToMongoDB;