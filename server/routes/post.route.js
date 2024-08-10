import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  console.log("Hello");
});

export default router;
