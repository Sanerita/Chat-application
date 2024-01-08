const mongoose = require("mongoose");

const connDB = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/MERN-Chat-App', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    ).then(() => {
        }
    ).catch((err) => {
        }
    );
}   
