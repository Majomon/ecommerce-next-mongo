/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
//Loading
import { Spinner } from "flowbite-react";

function ProductsContainer() {
  const [loading, setLoading] = useState(true);
  const [dataProducts, setDataProducts] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const fetch = async () => {
        const { data } = await axios.get("/api/products");
        setDataProducts(data);
      };
      fetch();
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner aria-label="Info spinner example" color="info" />
      ) : (
        <div>
          {dataProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsContainer;
