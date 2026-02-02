import asyncHandler from "express-async-handler";
import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../../database/models/User.js";
import { refreshAccessToken, generateTokens } from "./token.js";
import { validateEmail, validatePassword } from "../../core/validate.js";

const router = Router();
router.post('/refresh-token',refreshAccessToken);

router.post(/.*/,asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    validateEmail(email);
    validatePassword(password);
    res.status(400);
    const user = await User.findOne({ email: email, status: true })
      .select(" +password +roles")
      .lean()
      .exec();
    if (!user || !user.password)
      throw new Error("User not found or password not set");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error(" email or password is incorrect");

    const { accessToken, refreshToken } = generateTokens(user);
    res.status(200).json({
      message: "Login Success",
      name: user.name,
      email: user.email,
      token: accessToken,
      refreshToken: refreshToken,
    });
  })
);

export default router;
