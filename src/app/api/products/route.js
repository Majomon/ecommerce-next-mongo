import Product from "@/app/models/products";
import connectMongoDb from "@/app/mongo";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDb();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(request) {
  try {
    const { title, description, price, image, stock } = await request.json();
    if (!title || !description || !price || !image)
      throw new Error("Missing data");
    await connectMongoDb();
    const newProduct = await Product.create({
      title,
      description,
      price,
      image,
      stock,
    });
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
