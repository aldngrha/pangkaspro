import { create } from "zustand";
import axios from "axios";

const useLandingPageStore = create((set) => ({
  dataApi: { barbershop: [], image: [] },
  fetchData: async (url) => {
    const response = await axios.get(url);
    set({ dataApi: await response.data.data });
  },
}));

export default useLandingPageStore;
