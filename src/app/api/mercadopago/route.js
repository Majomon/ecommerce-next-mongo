import { NextResponse } from "next/server";
import { mercadopago } from "../../../utils/mercadoPago";

export async function POST(request) {
  try {
    const { title, price, image, stock, description } = await request.json();
    const items = [
      {
        title: title,
        picture_url: image,
        unit_price: price,
        currency_id: "ARS",
        description: description,
        quantity: stock,
      },
    ];
    const response = await mercadopago.preferences.create({
      items,
      back_urls: {
        success: "http://localhost:3000/success",
        failure: "http://localhost:3000/failure",
      },
      auto_return: "approved",
    });

    return NextResponse.json(response.body);
  } catch (error) {
    return NextResponse.json(error.message, { status: 201 });
  }
}
