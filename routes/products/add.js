import asyncHandler from "express-async-handler";
import Product from "../../database/models/Product.js";
const addProduct = asyncHandler(async (req, res) => {
  console.log(req.body)
    const { name, description, price, quantity, code, type } = req.body;
    const product = await Product.create({ name, description, price, quantity, code, type });
    res.status(201).json(product);
});
export default addProduct;