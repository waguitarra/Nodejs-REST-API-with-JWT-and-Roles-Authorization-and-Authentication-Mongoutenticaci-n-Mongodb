import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    code: Number,
    name: String,
    description: String,
    date: Date,

  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default model("Product", productSchema);
