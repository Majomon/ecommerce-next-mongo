"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
//Loading
import { Spinner } from "flowbite-react";
import SearchBar from "../SearchBar/SearchBar";

function ProductsContainer({ products }) {
  const [loading, setLoading] = useState(true);
  const [dataProducts, setDataProducts] = useState(products);
  const [searchProducts, setSearchProducts] = useState([]);


  // const fetchProductsData = async () => {
  //   const { data } = await axios.get("/api/products");
  //   setDataProducts(data);
  // };

  useEffect(() => {
    if(dataProducts.length > 0) setLoading(false);
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center text-center ">
      {loading ? (
        <div className="w-[500px] h-[500px] flex justify-center items-center">
          <Spinner
            aria-label="Info spinner example"
            color="info"
            size="xl"
            className="w-3/12 h-3/12"
          />
        </div>
      ) : (
        <div className="w-full h-full flex flex-wrap justify-center mt-10">
          {/* <SearchBar setDataProducts={setDataProducts} /> */}
          <div className="w-full h-full flex flex-wrap justify-center mt-10 mx-6">
            {dataProducts.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsContainer;
