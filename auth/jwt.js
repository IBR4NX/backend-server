import jwt from "jsonwebtoken";
import { JWT_ACCESS_SECRET } from "../config.js";

const auth = (req, res, next) => {
  if (!req.headers.authorization)return res.status(403).json({ message: "Unauthorized" });
  const authorization = req.headers.authorization.split(" ")[1] || req.headers.authorization;
  if (!authorization)return res.status(401).json({ message: "Unauthorized" });
  const token = authorization;
  try {
    const decoded = jwt.verify(token, JWT_ACCESS_SECRET||"",{ignoreExpiration:true});
    req.user = decoded;
    // console.log(req.user);
    if (!req.user) return res.status(401).json({ message: "Unauthorized" });
    else return next();
  } catch (err) {
    res.status(401).json({ message: "Token invalid" });
  }
};
export default auth;