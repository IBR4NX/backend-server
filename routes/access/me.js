import asyncHandler from "express-async-handler";
import modelUser from "../../database/models/modelUser.js";
const me = asyncHandler(async (req, res) => {
    const user = await modelUser.findById(req.user.id);
    res.json(user);
});
export default me;