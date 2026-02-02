import asyncHandler from "express-async-handler";
import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../../database/models/User.js";
const router = Router();

import { validateEmail, validatePassword } from "../../core/validate.js";

router.post(/.*/,asyncHandler(async (req, res) => {
    res.status(400);
    const {name,email ,password,confirmPassword}=req.body;
    if(!name || !email || !password || !confirmPassword) throw new Error(" All fields are required");
    validateEmail(email);
    validatePassword(password);
    const findByEmail = await User.findOne({ email: email });
    if (findByEmail) throw new Error(" User already registered");
    if(password !== confirmPassword) throw new Error(" Passwords do not match");
    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name: name,
      email: email,
      password: passwordHash,
    });
    res.status(200).json({ message: "Signup Successful", name: newUser.name, email: newUser.email });
    return;
  })
);


export default router;
