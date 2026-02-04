import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import modelUser from "../../database/models/modelUser.js";
import { generateTokens } from "./token.js";
import { validateEmail, validatePassword } from "../../core/validate.js";


const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    validateEmail(email);
    validatePassword(password);
    res.status(400);
    const user = await modelUser.findOne({ email: email, status: true })
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
  });

export default login;
