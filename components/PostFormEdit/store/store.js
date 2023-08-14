import { create } from "zustand";

// Get 
export const useGetPostData = create((set) => ({
  postData: [],
  updatePostData: (newData) => {
    set({ postData: newData })
  },
  resetPostData: () => set({ postData: "" }),
}));
