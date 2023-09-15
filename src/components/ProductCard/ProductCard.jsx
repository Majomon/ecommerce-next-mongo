import React from "react";

function ProductCard({ product }) {
  return (
    <div className="w-[260px] h-[400px] mx-6 mb-6 overflow-hidden rounded shadow-lg bg-yellow-400">
      <img className="w-full h-[55%]" src={product.image} alt={product.title} />
      <div className="w-full h-[45%] p-2 flex flex-col justify-between">
        <h2 className="text-black font-bold text-xl mb-2">{product.title}</h2>
        <p className="text-gray-700 text-sm">{product.description}</p>
        <div className="flex justify-around items-center px-6 pt-4 pb-2">
          <p className="text-gray-600 text-base">${product.price}</p>
          <button className="bg-yellow-600 text-white font-bold py-1 px-2 rounded-lg hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
