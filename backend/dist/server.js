"use strict";
// import express, { Application } from "express";
// import mongoose from "mongoose";
// import path from "path";
// import dotenv from "dotenv";
// import cors from "cors";
// import bodyParser from "body-parser";
// import userRoutes from "./routes/userRoutes";
// import ServerlessHttp = require("serverless-http");
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// dotenv.config();
// const app: Application = express();
// app.use(cors());
// const PORT: number = parseInt(process.env.PORT || "8000");
// mongoose
//   .connect(process.env.MONGO_URL as string)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error("MongoDB connection error:", err));
// app.use(bodyParser.json());
// app.use("/api", userRoutes);
// app.use(express.static(path.join(__dirname, "../../web/build")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../../web/build", "index.html"));
// });
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// "build": "npx tsc"
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const ServerlessHttp = require("serverless-http");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = parseInt(process.env.PORT || "8000");
mongoose_1.default
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
app.use(body_parser_1.default.json());
app.use("/api", userRoutes_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, "../../web/build")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../../web/build", "index.html"));
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
module.exports.handler = ServerlessHttp(app);
