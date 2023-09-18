import Product from "@/app/models/products";
import connectMongoDb from "@/app/mongo";
import { NextResponse } from "next/server";
import { productsData } from "@/DataBase/data"

export async function POST(request) {
  const productsToCreate = productsData.map(async (productData) => {
    const { name, description, price, image, stock } = productData;
    return Product.create({ name, description, price, image, stock });
  });

  await connectMongoDb();
  await Promise.all(productsToCreate);

  return NextResponse.json({ message: "Productos creados" }, { status: 201 });
}
