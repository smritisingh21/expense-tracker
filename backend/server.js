require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes= require("./routes/incomeRoutes");

const app = express();

app.use( //global middleware
    cors(
        {
        origin : process.env.PORT || "http://localhost:8000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],

    }
))

app.use(express.json());

connectDB();

app.use("/api/v1/auth", authRoutes);
app.use('/uploads' , express.static(path.join(__dirname ,"upload")))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});