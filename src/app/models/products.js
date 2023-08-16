import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: String,
    description: String,
    price: Number,
    stock: Number,
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
