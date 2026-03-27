require("dotenv").config();
const express = require("express");
const {createServer} = require("node:http");
const {Server} = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const connectToSocket = require("./services/socketConnection")

const port = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const startServer = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("mongo Connected");
        server.listen(port, () => {
            console.log(`server started on port ${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
};

startServer();