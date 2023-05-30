import { create } from "zustand";

const useCheckoutStore = create((set) => ({
  selectedProductDetail: null,
  selectedKapster: null,
  form: {
    name: "",
    phoneNumber: "",
    address: "",
    accountHolder: "",
    bankName: "",
    image: null,
  },
  setSelectedProductDetail: (detail) => set({ selectedProductDetail: detail }),
  setSelectedKapster: (kapster) => set({ selectedKapster: kapster }),
  setForm: (newForm) =>
    set((state) => ({
      ...state,
      form: { ...state.form, ...newForm },
    })),
}));

export default useCheckoutStore;
