import express from "express";
import path from "path";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
const router = express.Router();
router.use(express.static(path.join(__dirname, "../views")));
const users = [];
import signup from "./access/signup.js";
import login from "./access/login.js";
import auth from '../auth/jwt.js'
router.use("/signup", signup);
router.use("/login", login);

import admin from "./admin/display.js";
router.use("/admin",auth, admin);


router.use(/.*/, auth,asyncHandler( async (req, res)=>{
    res.status(200).json({message: 'Access to this path is not allowed',status:req.user,cookies:req.cookies,query:req.query,body:req.body,params:req.params});
}));
export default router;
