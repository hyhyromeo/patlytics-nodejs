import express from "express";
import infringementChecker from "../controllers/infringementCheckController.js";

const router = express.Router();
// Define the API endpoint
router.get("/infringementCheck", (req, res) => {
  res.send("infringementCheck API is working");
});
router.post("/infringementCheck", infringementChecker);

export default router;
