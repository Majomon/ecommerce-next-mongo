import Product from "@/app/models/products";
import connectMondoDb from "@/app/mongo";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description, price, stock } = await request.json();
  await connectMondoDb();
  await Product.create({ title, description, price, stock });
  return NextResponse.json({ messaje: "Producto creado" }, { status: 201 });
}

export async function GET(request) {
  await connectMondoDb();
  const products = await Product.find();
  return NextResponse.json({ products });
}
