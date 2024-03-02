import create from "zustand";
export const useLogStore = create((set) => ({
  isLogged: false,
  setLogin: () => set(() => ({ isLogged: true })),
  setLogOut: () => set(() => ({ isLogged: false })),
}));
