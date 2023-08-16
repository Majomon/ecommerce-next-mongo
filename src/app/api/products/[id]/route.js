import connectMongoDb from "@/app/mongo";
import Product from "@/app/models/products";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newPrice: price,
    newstock: stock,
  } = await request.json();
  await connectMongoDb();
  await Product.findByIdAndUpdate(id, { title, description, price, stock });
  return NextResponse.json({ message: "Producto modificado" }, { status: 200 });
}
