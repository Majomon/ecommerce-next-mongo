import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    description: String,
    price: Number,
    image: String,
    stock: {
      type: Number,
      default: 1000,
    },
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
