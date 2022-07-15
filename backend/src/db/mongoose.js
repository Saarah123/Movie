const mongoose = require('mongoose');
require('dotenv').config({ path: './config/config.env' });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://Saarah123:Saarah123@cluster0.oo4zd.mongodb.net/mydb?authSource=admin&replicaSet=atlas-8111nd-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
     
    );

    console.log(`MongoDB connected at ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
