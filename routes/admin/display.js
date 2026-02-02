import asyncHandler from "express-async-handler";
import { Router } from "express";
import User from "../../database/models/User.js";
const router = Router();
router.post("/users", asyncHandler(async (req, res) => {
    if(req.user.role !== "admin") throw new Error("Unauthorized");
    const users = await User.find({ status: true }).select("+password +role +status +verified +createdAt +updatedAt").lean().exec();
    res.status(200).json({ message: "Admin Display",users });
}));
export default router;