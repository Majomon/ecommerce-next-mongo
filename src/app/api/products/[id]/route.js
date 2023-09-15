import Product from "@/app/models/products";
import connectMongoDb from "@/app/mongo";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDb();
    const productById = await Product.findById(id);
    return NextResponse.json(productById);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function PUT(request, { params }) {
  try {
    await connectMongoDb();
    const { id } = params;
    const data = await request.json();
    await Product.findByIdAndUpdate(id, {...data});
    const productUpdated = await Product.findById(id)
    return NextResponse.json(productUpdated);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await connectMongoDb();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message: "Product deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
