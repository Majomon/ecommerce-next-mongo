import { create } from "zustand";

export const useProductsStore = create((set, get) => {
  return {
    products: [],
    getProducts: async () => {
      const res = await fetch("https://localhost:3000/api/products");
    },
  };
});
