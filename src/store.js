import create from "zustand";

export const useLogStore = create((set) => ({
  isLogged: "",

  setLogin: () => set(() => ({ isLogged: true })),
  setLogOut: () => set(() => ({ isLogged: false })),
}));
