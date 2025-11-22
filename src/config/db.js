import mongoose from "mongoose"

const mongoDbURI="mongodb+srv://sathyaanavarathan10_db_user:Nem16hoc6WIUusdY@recpie1.doxlsfc.mongodb.net/Recpie1?appName=Recpie1"





export const connectDB=()=>{
    mongoose.connect(mongoDbURI)
    .then(()=>console.log("MongoDB connected"))
    .catch((err)=>console.log(err))
}

export default connectDB;