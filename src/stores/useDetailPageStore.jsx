import { create } from "zustand";
import axios from "axios";

const useDetailPageStore = create((set) => ({
  dataApi: { kapsterId: [] },
  counterValue: 1,
  fetchData: async (url) => {
    const response = await axios.get(url);
    set({ dataApi: await response.data.data.barbershop });
  },
  setCounterValue: (value) => set({ counterValue: value }), // Fungsi untuk mengubah nilai counterValue
}));

export default useDetailPageStore;
