import { create } from "zustand";
import axios from "axios";

export const useProductsStore = create((set, get) => {
  return {
    products: [],
    filteredProducts: [],
    getProducts: async () => {
      const {data} = await axios.get("/api/products");
      set({products:data})
    },
  };
});
