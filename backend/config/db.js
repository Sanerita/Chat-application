
const mongoose = require("mongoose");

const connectDB = async() => {

try {
    
    const conn = await mongoose.connect('mongodb+srv://sanelisiwesileku:SaneTOASTrita@cluster0.hskkcfj.mongodb.net/', {

       
    
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
} catch (error) {
   console.error(`Error: ${error.message}`);
    process.exit(1); 
}
};

module.exports = connectDB;