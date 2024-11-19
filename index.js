import express from "express";
import dotenv from "dotenv";
import infringementCheckRoute from "./routes/infringementCheckRoute.js";
import cors from "cors";
// Load environment variables from .env file
dotenv.config();
const app = express();
// Middleware to parse JSON
app.use(express.json());

// Enable CORS for all routes for development purposes
// Use CORS middleware
app.use(cors({ origin: "*" }));

// Routes

app.use("/api/infringement", infringementCheckRoute);

app.use("/", (req, res) => {
  res.send("API is working ~");
});

// Start the server
const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
