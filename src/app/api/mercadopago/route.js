import { NextResponse } from "next/server";
import { mercadopago } from "../../../utils/mercadoPago";

export async function POST(request) {
  try {
    const productsItems = await request.json();

    const prefrence = {
      items: [
        {
          title: productsItems.name,
          picture_url: productsItems.image,
          unit_price: Number(productsItems.price),
          currency_id: "ARS",
          description: productsItems.description,
          quantity: productsItems.stock,
        },
      ],
      back_urls: {
        success: "http://localhost:3000/success",
        failure: "http://localhost:3000/failure",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(prefrence);

    return NextResponse.json(response.body);
  } catch (error) {
    return NextResponse.json(error.message, { status: 201 });
  }
}
