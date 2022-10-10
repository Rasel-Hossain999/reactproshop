import mongoose from 'mongoose'



// mongoose.connect(
//     "mongodb+srv://rasel1997:rasel1997@rasel1997.gbm5b0w.mongodb.net/?retryWrites=true&w=majority"
//     )
//     .then(
//         ()=> {
//             console.log("Connected");
//         }
//     ).catch(
//         ()=> {
//             console.log("Failed");
//         }
//     )
// import dotenv from 'dotenv'
// dotenv.config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        // const conn = await mongoose.connect("mongodb+srv://rasel1997:<password>@rasel1997.gbm5b0w.mongodb.net/?retryWrites=true&w=majority", {
            // useUnifiedTopology: true,
            // useNewUrlParser: true,
            // // useCreatedIndex: true
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
        // console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error:${error.message}`.red.underline.bold)
        // console.error(`Error:${error.message}`)
        process.exit(1)
    }
}

export default connectDB