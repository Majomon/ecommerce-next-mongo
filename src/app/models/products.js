import mongoose, { Schema, mongo } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    description: String,
    price: Number,
    stock: Number,
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
