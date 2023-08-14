import { create } from "zustand";

// New Post
export const useDialog = create((set) => ({
  isDialogOpen: false,
  updateDialog: (newStatus) => {
    set({ isDialogOpen: newStatus })
  },
  resetDialog: () => set({ isDialogOpen: false }),
}));

// Edit Post
export const useDialogEditPost = create((set) => ({
  isDialogOpen: false,
  updateDialog: (newStatus) => {
    set({ isDialogOpen: newStatus })
  },
  resetDialog: () => set({ isDialogOpen: false }),
}));