import asyncHandler from "express-async-handler";
import { Router } from "express";
import auth from '../../auth/jwt.js'
import Authorization from "../../database/models/token.js";
const router = Router();


router.post("/logout", auth, async (req, res) => {
  
  await Authorization.updateOne({ user: req.user._id }, { status: false });
  res.status(200).json({ message: "Logged out successfully" });
});

export default router;
