import mongoose from "mongoose";

const connectDB  = async() => {
try {
    const connect = await mongoose.connect(process.env.mongo_url);
    console.log("Mongo DB connected successfully")
} catch (error) {

    console.log("Mongodb connection failed", error);
    process.exit(1);
}

};

export default connectDB;
