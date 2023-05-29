import { create } from "zustand";

const useCheckoutStore = create((set) => ({
  selectedProductDetail: null,
  selectedKapster: null,
  setSelectedProductDetail: (detail) => set({ selectedProductDetail: detail }),
  setSelectedKapster: (kapster) => set({ selectedKapster: kapster }),
}));

export default useCheckoutStore;
