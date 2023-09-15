import React from "react";

function ProductCard({ product }) {
  return (
    <div className="max-w-xs mx-auto overflow-hidden rounded shadow-lg">
      <img className="w-full h-auto" src={product.image} alt={product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-600 text-base">{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
