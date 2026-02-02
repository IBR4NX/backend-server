
import mongoose from 'mongoose';
import convert from "../../core/convert.js";



const { DOCUMENT_NAME, COLLECTION_NAME } = convert("Authorization");

const schema = new mongoose.Schema({
  user: { type: String, required: true},
  agent: { type: String, required: true },
  ip: { type: String, required: true },
  status:{type:Boolean,default:true},
  expiresAt: { type: Date, required: true },
  access_token:{type:String,required:true},
  refresh_token:{type:String,required:true}
});

const Authorization = mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME)
export default Authorization;