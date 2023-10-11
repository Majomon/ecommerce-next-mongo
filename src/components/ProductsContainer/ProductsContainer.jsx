"use client";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useProductsStore } from "@/app/store/store";
import SearchBar from "../SearchBar/SearchBar";
//Loading
import { Spinner } from "flowbite-react";

function ProductsContainer() {
  const [loading, setLoading] = useState(true);

  const products = useProductsStore(state => state.products);
  const getProducts = useProductsStore(state => state.getProducts);
  const [searchProducts, setSearchProducts] = useState([]);


  // const fetchProductsData = async () => {
  //   const { data } = await axios.get("/api/products");
  //   setDataProducts(data);
  // };

  useEffect(() => {
    getProducts();
    if(products.length > 0) setLoading(false);
  }, [products]);

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
            {products.map((product) => (
              <ProductCard product={product} key={product._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsContainer;
