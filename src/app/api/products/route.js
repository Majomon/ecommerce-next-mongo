import Product from "@/app/models/products";
import connectMongoDb from "@/app/mongo";
import { NextResponse } from "next/server";

export async function GET(request) {
  await connectMongoDb();
  const url = new URL(request.url);
  const search = url.searchParams.get("search");
  let products = [];

  if (search) {
    const rgx = (pattern) => new RegExp(`.*${pattern}.*`);
    const searchRgx = rgx(search);

    products = await Product.find({
      $or: [
        { name: { $regex: searchRgx, $options: "i" } },
        { description: { $regex: searchRgx, $options: "i" } },
      ],
    });
  } 

  else products = await Product.find();

  const productsOrdered = products.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  return NextResponse.json(productsOrdered);
}

export async function POST(request) {
  try {
    const { name, description, price, image, stock } = await request.json();

    if (!name || !description || !price || !image)
      throw new Error("Missing data");
    await connectMongoDb();
    const newProduct = await Product.create({
      name,
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
