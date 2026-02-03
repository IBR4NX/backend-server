
import mongoose from "mongoose";
import convert from '../../core/convert.js';
const { DOCUMENT_NAME, COLLECTION_NAME } = convert("product");
const schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    image: { type: String, required: true },
    code: { type: String, required: true },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
}); 

const Product = mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME); 
export default Product;
