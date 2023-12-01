const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const cors = require("cors"); 

const app = express();
dotenv.config();

// Enable CORS for all routes
app.use(cors());

app.get('/', (_req, res) => {

    res.send("API is running successfully");
});

app.get("/api/chat", (_req, res) => {

    res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {

    // console.log(req.params.id);

    const singlechat = chats.find(c=>c._id===req.params.id);
    res.send(singlechat);
});

const PORT = process.env.PORT || 5000;


app.listen(5000, console.log(`Server started on port ${PORT}`));