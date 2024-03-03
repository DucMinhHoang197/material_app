import create from "zustand";
export const useLogStore2 = create((set) => ({
  isLogged2: "",
  setLogin2: () => set(() => ({ isLogged2: true })),
  setLogOut2: () => set(() => ({ isLogged2: false })),
}));
