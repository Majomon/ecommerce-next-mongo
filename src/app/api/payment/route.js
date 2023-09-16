import mercadopago from "mercadopago";
import { NextResponse } from "next/server";

const { ACCESS_TOKEN } = process.env;

if (ACCESS_TOKEN) {
  mercadopago.configure({
    access_token: ACCESS_TOKEN,
  });
}

export async function POST(request) {
  try {
    const { title, price, image, stock, description } = await request.json();
    const prefer = {
      items: [
        {
          title: title,
          picture_url: image,
          unit_price: price,
          currency_id: "ARS",
          description: description,
          quantity: stock,
        },
      ],
      back_urls: {
        success: "http://localhost:3000/success",
        failure: "http://localhost:3000/error",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(prefer);
    return NextResponse.send({ response });
  } catch (error) {
    return NextResponse.json(error.message, { status: 201 });
  }
}
