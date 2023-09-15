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
    const fetch = async () => {
      const { data } = await axios.get("/api/products");
      setDataProducts(data);
    };
    fetch();
    setLoading(false);
  }, []);

  return (
    <div className="w-[100%] h-[90vh] flex justify-center items-center text-center">
      {loading ? (
        <Spinner
          aria-label="Info spinner example"
          color="info"
          size="xl"
          className="w-3/12 h-3/12"
        />
      ) : (
        <div className="w-full h-full flex flex-wrap justify-center mt-10 mx-6">
          {dataProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductsContainer;
