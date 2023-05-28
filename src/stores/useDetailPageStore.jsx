import { create } from "zustand";
import axios from "axios";

const useDetailPageStore = create((set) => ({
  dataApi: { kapsterId: [] },
  fetchData: async (url) => {
    const response = await axios.get(url);
    set({ dataApi: await response.data.data.barbershop });
  },
}));

export default useDetailPageStore;
