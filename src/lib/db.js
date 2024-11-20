import mongoose from "mongoose";

const MONGO_URI = "mongodb://admin:s3KNX96h8uKKlPZ@%2Fhome%2Fpancapan%2Fmongodb-0.sock";
// const MONGO_URI = "mongodb://localhost:27017";

if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable.");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_URI, {}).then((mongoose) => {
            console.log("db connected")
            return mongoose
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectToDatabase;