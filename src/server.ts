// import express, { Application } from "express";
// import mongoose from "mongoose";
// import path from "path";
// import dotenv from "dotenv";
// import cors from "cors";
// import bodyParser from "body-parser";
// import userRoutes from "./routes/userRoutes";
// import ServerlessHttp = require("serverless-http");

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



import express, { Application } from "express";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes";
import serverless from "serverless-http";

dotenv.config();
const app: Application = express();
app.use(cors());
const PORT: number = parseInt(process.env.PORT || "8000");

console.log("port", PORT);

mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(bodyParser.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// Export the app wrapped with serverless-http
export const handler = serverless(app);

// Start the server