import asyncHandler from "express-async-handler";
import User from "../../database/models/User.js";
const me = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user);
});
export default me;