const mongoose = require("mongoose");

const connectDatabase = async() => {
  mongoose.connection.on("connected", ()=>{
    console.log("Database Connected")
  })
  await mongoose.connect(`${process.env.MONGO_DB_URL}/depi`);
}

module.exports = connectDatabase;