import ProductsContainer from "@/components/ProductsContainer/ProductsContainer";
import React from "react";

const fetchProductsData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    // cache: "no-cache"
  });
  return await res.json();
}

export default async function Home() {

  const products = await fetchProductsData();

  return (
    <div>
      <ProductsContainer products={products}/>
    </div>
  );
}
