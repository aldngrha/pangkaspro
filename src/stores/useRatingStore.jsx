import { create } from "zustand";

const useRatingStore = create((set) => ({
  selectedRating: null,
  setSelectedRating: (value) => set(() => ({ selectedRating: value })),
}));

export default useRatingStore;
