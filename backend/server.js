require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const incomeRoutes= require("./routes/incomeRoutes");
const expenseRoutes= require("./routes/expenseRoutes");
const dashboardRoutes= require("./routes/dashboardRoutes");

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
app.use("/api/v1/income", incomeRoutes);
app.use("/api/v1/expense", expenseRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);

app.use('/uploads' , express.static(path.join(__dirname ,"upload")))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});